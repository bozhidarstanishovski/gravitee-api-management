/**
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
package io.gravitee.gateway.handlers.api.context;

import static org.assertj.core.api.Assertions.assertThat;

import io.gravitee.definition.model.v4.Api;
import io.gravitee.el.TemplateEngine;
import io.gravitee.el.exceptions.ExpressionEvaluationException;
import java.util.Map;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Test;
import org.springframework.expression.spel.SpelEvaluationException;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
class ApiTemplateVariableProviderTest {

    @Test
    void should_provide_api_id_in_EL() {
        var apiDefinition = Api.builder().id("api#id").buildv2();

        TemplateEngine engine = buildTemplateEngine(apiDefinition);
        engine.eval("{#api.id}", String.class).test().assertValue("api#id");
    }

    @Test
    void should_provide_api_name_in_EL() {
        var apiDefinition = Api.builder().name("api#name").buildv2();

        TemplateEngine engine = buildTemplateEngine(apiDefinition);
        engine.eval("{#api.name}", String.class).test().assertValue("api#name");
    }

    @Test
    void should_provide_api_version_in_EL() {
        var apiDefinition = Api.builder().apiVersion("api#version").buildv2();

        TemplateEngine engine = buildTemplateEngine(apiDefinition);
        engine.eval("{#api.version}", String.class).test().assertValue("api#version");
    }

    @Test
    void should_provide_api_properties_in_EL() {
        var apiDefinition = Api.builder().properties(Map.of("prop1", "value1", "prop2", "value2")).buildv2();

        TemplateEngine engine = buildTemplateEngine(apiDefinition);
        engine.eval("{#properties[prop1]}", String.class).test().assertValue("value1");
        engine.eval("{#properties[prop2]}", String.class).test().assertValue("value2");
        engine.eval("{#api.properties[prop1]}", String.class).test().assertValue("value1");
        engine.eval("{#api.properties[prop2]}", String.class).test().assertValue("value2");
    }

    @Test
    void should_return_no_value_when_evaluate_unknown_api_properties_in_EL() {
        var apiDefinition = Api.builder().properties(Map.of("prop1", "value1", "prop2", "value2")).buildv2();

        TemplateEngine engine = buildTemplateEngine(apiDefinition);
        engine.eval("{#properties[unknown]}", String.class).test().assertNoValues();
        engine.eval("{#api.properties[unknown]}", String.class).test().assertNoValues();
    }

    @Test
    void should_throw_when_evaluate_null_api_properties_in_EL() {
        var apiDefinition = Api.builder().buildv2();

        TemplateEngine engine = buildTemplateEngine(apiDefinition);
        engine
            .eval("{#properties[prop2]}", String.class)
            .test()
            .assertError(
                e -> {
                    assertThat(e)
                        .isInstanceOf(ExpressionEvaluationException.class)
                        .hasCauseInstanceOf(SpelEvaluationException.class)
                        .hasStackTraceContaining("EL1007E: Property or field 'prop2' cannot be found on null");

                    return true;
                }
            );
        engine
            .eval("{#api.properties[prop1]}", String.class)
            .test()
            .assertError(
                e -> {
                    assertThat(e)
                        .isInstanceOf(ExpressionEvaluationException.class)
                        .hasCauseInstanceOf(SpelEvaluationException.class)
                        .hasStackTraceContaining(
                            "EL1021E: A problem occurred whilst attempting to access the property 'properties': 'Unable to access property 'properties' through getter method"
                        );

                    return true;
                }
            );
    }

    private static TemplateEngine buildTemplateEngine(io.gravitee.definition.model.Api apiDefinition) {
        var engine = TemplateEngine.templateEngine();
        var apiContextProvider = new ApiTemplateVariableProvider(new io.gravitee.gateway.handlers.api.definition.Api(apiDefinition));
        apiContextProvider.provide(engine.getTemplateContext());
        return engine;
    }
}
