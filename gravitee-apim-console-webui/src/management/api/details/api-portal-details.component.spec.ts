/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpTestingController } from '@angular/common/http/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { GioFormFilePickerInputHarness, GioFormTagsInputHarness, GioSaveBarHarness } from '@gravitee/ui-particles-angular';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { InteractivityChecker } from '@angular/cdk/a11y';
import { MatSlideToggleHarness } from '@angular/material/slide-toggle/testing';

import { ApiPortalDetailsModule } from './api-portal-details.module';
import { ApiPortalDetailsComponent } from './api-portal-details.component';

import { CONSTANTS_TESTING, GioHttpTestingModule } from '../../../shared/testing';
import { Api } from '../../../entities/api';
import { fakeApi } from '../../../entities/api/Api.fixture';
import { UIRouterStateParams, CurrentUserService, AjsRootScope } from '../../../ajs-upgraded-providers';
import { User } from '../../../entities/user';
import { Category } from '../../../entities/category/Category';

describe('ApiPortalDetailsComponent', () => {
  const API_ID = 'apiId';
  const currentUser = new User();
  currentUser.userPermissions = ['api-definition-u'];
  const fakeRootScope = { $broadcast: jest.fn(), $on: jest.fn() };

  let fixture: ComponentFixture<ApiPortalDetailsComponent>;
  let loader: HarnessLoader;
  let rootLoader: HarnessLoader;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, GioHttpTestingModule, ApiPortalDetailsModule, MatIconTestingModule],
      providers: [
        { provide: UIRouterStateParams, useValue: { apiId: API_ID } },
        { provide: CurrentUserService, useValue: { currentUser } },
        {
          provide: 'Constants',
          useValue: {
            ...CONSTANTS_TESTING,
            env: {
              ...CONSTANTS_TESTING.env,
              settings: {
                ...CONSTANTS_TESTING.env.settings,
                apiReview: {
                  enabled: true,
                },
              },
            },
            org: {
              ...CONSTANTS_TESTING.org,
              settings: {
                ...CONSTANTS_TESTING.org.settings,
                jupiterMode: {
                  enabled: true,
                },
              },
            },
          },
        },
        { provide: AjsRootScope, useValue: fakeRootScope },
      ],
    }).overrideProvider(InteractivityChecker, {
      useValue: {
        isFocusable: () => true, // This traps focus checks and so avoid warnings when dealing with
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPortalDetailsComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    GioFormFilePickerInputHarness.forceImageOnload();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should edit api details', async () => {
    const api = fakeApi({
      id: API_ID,
      name: '🐶 API',
      version: '1.0.0',
      labels: ['label1', 'label2'],
      categories: ['category1'],
    });
    expectApiGetRequest(api);
    expectCategoriesGetRequest([
      { id: 'category1', name: 'Category 1', key: 'category1' },
      { id: 'category2', name: 'Category 2', key: 'category2' },
    ]);

    // Wait image to be loaded (fakeAsync is not working with getBase64 🤷‍♂️)
    await new Promise((resolve) => setTimeout(resolve, 10));

    const saveBar = await loader.getHarness(GioSaveBarHarness);
    expect(await saveBar.isVisible()).toBe(false);

    const nameInput = await loader.getHarness(MatInputHarness.with({ selector: '[formControlName="name"]' }));
    expect(await nameInput.getValue()).toEqual('🐶 API');
    await nameInput.setValue('🦊 API');

    const versionInput = await loader.getHarness(MatInputHarness.with({ selector: '[formControlName="version"]' }));
    expect(await versionInput.getValue()).toEqual('1.0.0');
    await versionInput.setValue('2.0.0');

    const descriptionInput = await loader.getHarness(MatInputHarness.with({ selector: '[formControlName="description"]' }));
    expect(await descriptionInput.getValue()).toEqual('The whole universe in your hand.');
    await descriptionInput.setValue('🦊 API description');

    const picturePicker = await loader.getHarness(GioFormFilePickerInputHarness.with({ selector: '[formControlName="picture"]' }));
    expect((await picturePicker.getPreviews())[0]).toContain(api.picture_url);
    await picturePicker.dropFiles([newImageFile('new-image.png', 'image/png')]);

    const backgroundPicker = await loader.getHarness(GioFormFilePickerInputHarness.with({ selector: '[formControlName="background"]' }));
    expect((await backgroundPicker.getPreviews())[0]).toContain(api.background_url);
    await backgroundPicker.dropFiles([newImageFile('new-image.png', 'image/png')]);

    const labelsInput = await loader.getHarness(GioFormTagsInputHarness.with({ selector: '[formControlName="labels"]' }));
    expect(await labelsInput.getTags()).toEqual(['label1', 'label2']);
    await labelsInput.addTag('label3');

    const categoriesInput = await loader.getHarness(MatSelectHarness.with({ selector: '[formControlName="categories"]' }));
    expect(await categoriesInput.getValueText()).toEqual('Category 1');
    await categoriesInput.clickOptions({ text: 'Category 2' });

    const jupiterModeInput = await loader.getHarness(MatSlideToggleHarness.with({ selector: '[formControlName="enableJupiter"]' }));
    expect(await jupiterModeInput.isChecked()).toBe(false);
    await jupiterModeInput.check();

    expect(await saveBar.isSubmitButtonInvalid()).toEqual(false);
    await saveBar.clickSubmit();

    // Expect fetch api and update
    expectApiGetRequest(api);

    // Wait image to be covert to base64
    await new Promise((resolve) => setTimeout(resolve, 10));

    const req = httpTestingController.expectOne({ method: 'PUT', url: `${CONSTANTS_TESTING.env.baseURL}/apis/${API_ID}` });
    expect(req.request.body.name).toEqual('🦊 API');
    expect(req.request.body.version).toEqual('2.0.0');
    expect(req.request.body.description).toEqual('🦊 API description');
    expect(req.request.body.picture).toEqual('data:image/png;base64,');
    expect(req.request.body.background).toEqual('data:image/png;base64,');
    expect(req.request.body.labels).toEqual(['label1', 'label2', 'label3']);
    expect(req.request.body.categories).toEqual(['category1', 'category2']);
    expect(req.request.body.execution_mode).toEqual('jupiter');
  });

  it('should ask for review', async () => {
    const api = fakeApi({
      id: API_ID,
      workflow_state: 'DRAFT',
    });
    expectApiGetRequest(api);
    expectCategoriesGetRequest();
    await waitImageCheck();

    const button = await loader.getHarness(MatButtonHarness.with({ text: 'Ask for a review' }));
    await button.click();

    const confirmDialog = await rootLoader.getHarness(MatDialogHarness.with({ selector: '#reviewApiDialog' }));
    const confirmDialogSwitchButton = await confirmDialog.getHarness(MatButtonHarness.with({ text: 'Ask for review' }));
    await confirmDialogSwitchButton.click();

    httpTestingController.expectOne({
      method: 'POST',
      url: `${CONSTANTS_TESTING.env.baseURL}/apis/${API_ID}/reviews?action=ASK`,
    });
  });

  it('should start the api', async () => {
    const api = fakeApi({
      id: API_ID,
      state: 'STOPPED',
    });
    expectApiGetRequest(api);
    expectCategoriesGetRequest();
    await waitImageCheck();

    const button = await loader.getHarness(MatButtonHarness.with({ text: 'Start the API' }));
    await button.click();

    const confirmDialog = await rootLoader.getHarness(MatDialogHarness.with({ selector: '#lifecycleDialog' }));
    const confirmDialogSwitchButton = await confirmDialog.getHarness(MatButtonHarness.with({ text: 'Start' }));
    await confirmDialogSwitchButton.click();

    httpTestingController.expectOne({
      method: 'POST',
      url: `${CONSTANTS_TESTING.env.baseURL}/apis/${API_ID}?action=START`,
    });
  });

  it('should stop the api', async () => {
    const api = fakeApi({
      id: API_ID,
      state: 'STARTED',
    });
    expectApiGetRequest(api);
    expectCategoriesGetRequest();
    await waitImageCheck();

    const button = await loader.getHarness(MatButtonHarness.with({ text: 'Stop the API' }));
    await button.click();

    const confirmDialog = await rootLoader.getHarness(MatDialogHarness.with({ selector: '#lifecycleDialog' }));
    const confirmDialogSwitchButton = await confirmDialog.getHarness(MatButtonHarness.with({ text: 'Stop' }));
    await confirmDialogSwitchButton.click();

    httpTestingController.expectOne({
      method: 'POST',
      url: `${CONSTANTS_TESTING.env.baseURL}/apis/${API_ID}?action=STOP`,
    });
  });

  it('should publish the api', async () => {
    const api = fakeApi({
      id: API_ID,
      lifecycle_state: 'CREATED',
    });
    expectApiGetRequest(api);
    expectCategoriesGetRequest();
    await waitImageCheck();

    const button = await loader.getHarness(MatButtonHarness.with({ text: 'Publish the API' }));
    await button.click();

    const confirmDialog = await rootLoader.getHarness(MatDialogHarness.with({ selector: '#apiLifecycleDialog' }));
    const confirmDialogSwitchButton = await confirmDialog.getHarness(MatButtonHarness.with({ text: 'Publish' }));
    await confirmDialogSwitchButton.click();

    expectApiGetRequest(api);
    const req = httpTestingController.expectOne({ method: 'PUT', url: `${CONSTANTS_TESTING.env.baseURL}/apis/${API_ID}` });
    expect(req.request.body.lifecycle_state).toEqual('PUBLISHED');
  });

  it('should make public the api', async () => {
    const api = fakeApi({
      id: API_ID,
      visibility: 'PRIVATE',
    });
    expectApiGetRequest(api);
    expectCategoriesGetRequest();
    await waitImageCheck();

    const button = await loader.getHarness(MatButtonHarness.with({ text: 'Make Public' }));
    await button.click();

    const confirmDialog = await rootLoader.getHarness(MatDialogHarness.with({ selector: '#apiLifecycleDialog' }));
    const confirmDialogSwitchButton = await confirmDialog.getHarness(MatButtonHarness.with({ text: 'Make Public' }));
    await confirmDialogSwitchButton.click();

    expectApiGetRequest(api);
    const req = httpTestingController.expectOne({ method: 'PUT', url: `${CONSTANTS_TESTING.env.baseURL}/apis/${API_ID}` });
    expect(req.request.body.visibility).toEqual('PUBLIC');
  });

  function expectApiGetRequest(api: Api) {
    httpTestingController.expectOne({ url: `${CONSTANTS_TESTING.env.baseURL}/apis/${api.id}`, method: 'GET' }).flush(api);
    fixture.detectChanges();
  }

  function expectCategoriesGetRequest(categories: Category[] = []) {
    httpTestingController.expectOne({ url: `${CONSTANTS_TESTING.env.baseURL}/configuration/categories`, method: 'GET' }).flush(categories);
    fixture.detectChanges();
  }
});

export function newImageFile(fileName: string, type: string): File {
  return new File([''], fileName, { type });
}

const waitImageCheck = () => new Promise((resolve) => setTimeout(resolve, 1));