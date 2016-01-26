﻿import * as assert from "assert";
import {NamespaceDefinition, NamespaceDeclarationType} from "./../../../../definitions";
import {NamespaceStructure} from "./../../structures";
import {runNamedDefinitionTests, runExportableDefinitionTests, runModuledDefinitionTests, runAmbientableDefinitionTests} from "./../base";
import {ensureNotNull} from "./../../ensure-not-null";

export function runNamespaceDefinitionTests(definition: NamespaceDefinition, structure: NamespaceStructure) {
    describe(`namespace ${structure.name}`, () => {
        ensureNotNull(definition, () => {
            runNamedDefinitionTests(definition, structure);
            runExportableDefinitionTests(definition, structure);
            runAmbientableDefinitionTests(definition, structure);
            runModuledDefinitionTests(definition, structure);

            it(`should have declaration type ${NamespaceDeclarationType[structure.declarationType]}`, () => {
                assert.equal(definition.declarationType, structure.declarationType);
            });
        });
    });
}
