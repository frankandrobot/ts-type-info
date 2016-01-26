﻿import * as assert from "assert";
import {VariableStructure} from "./../../structures";
import {VariableDefinition, VariableDeclarationType} from "./../../../../definitions";
import {runNamedDefinitionTests, runExportableDefinitionTests, runTypeExpressionedDefinitionTests,
        runDefaultExpressionedDefinitionTests, runAmbientableDefinitionTests} from "./../base";
import {ensureNotNull} from "./../../ensure-not-null";

export function runVariableDefinitionTests(definition: VariableDefinition, structure: VariableStructure) {
    describe(`variable ${structure.name}`, () => {
        ensureNotNull(definition, () => {
            if (structure.typeExpression == null) {
                structure.typeExpression = { text: "any" };
            }

            runNamedDefinitionTests(definition, structure);
            runExportableDefinitionTests(definition, structure);
            runTypeExpressionedDefinitionTests(definition, structure);
            runAmbientableDefinitionTests(definition, structure);
            runDefaultExpressionedDefinitionTests(definition, structure);

            it(`should have declaration type ${VariableDeclarationType[structure.declarationType]}`, () => {
                assert.equal(definition.declarationType, structure.declarationType);
            });
        });
    });
}
