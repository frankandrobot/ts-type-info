﻿import * as assert from "assert";
import {IModuledDefinition} from "./../../../../definitions";
import {runNamespaceDefinitionTests} from "./../namespace";
import {runInterfaceDefinitionTests} from "./../interface";
import {runFunctionDefinitionTests} from "./../function";
import {runEnumDefinitionTests} from "./../enum";
import {runClassDefinitionTests} from "./../class";
import {runVariableDefinitionTests} from "./../variable";
import {runNamedDefinitionTests} from "./run-named-definition-tests";
import {runExportableDefinitionTests} from "./run-exportable-definition-tests";
import {ModuledStructure} from "./../../structures";

export function runModuledDefinitionTests(definition: IModuledDefinition, expected: ModuledStructure) {
    expected.namespaces = expected.namespaces || [];
    expected.classes = expected.classes || [];
    expected.enums = expected.enums || [];
    expected.functions = expected.functions || [];
    expected.interfaces = expected.interfaces || [];
    expected.variables = expected.variables || [];
    expected.exports = expected.exports || [];

    describe("namespaces", () => {
        it("should have the expected number of namespaces", () => {
            assert.equal(definition.namespaces.length, expected.namespaces.length);
        });

        expected.namespaces.forEach((namespaceStructure, i) => {
            runNamespaceDefinitionTests(definition.namespaces[i], namespaceStructure);
        });
    });

    describe("classes", () => {
        it("should have the expected number of classes", () => {
            assert.equal(definition.classes.length, expected.classes.length);
        });

        expected.classes.forEach((classStructure, i) => {
            runClassDefinitionTests(definition.classes[i], classStructure);
        });
    });

    describe("interfaces", () => {
        it("should have the expected number of interfaces", () => {
            assert.equal(definition.interfaces.length, expected.interfaces.length);
        });

        expected.interfaces.forEach((interfaceStructure, i) => {
            runInterfaceDefinitionTests(definition.interfaces[i], interfaceStructure);
        });
    });

    describe("functions", () => {
        it("should have the expected number of functions", () => {
            assert.equal(definition.functions.length, expected.functions.length);
        });

        expected.functions.forEach((functionStructure, i) => {
            runFunctionDefinitionTests(definition.functions[i], functionStructure);
        });
    });

    describe("enums", () => {
        it("should have the expected number of enums", () => {
            assert.equal(definition.enums.length, expected.enums.length);
        });

        expected.enums.forEach((enumStructure, i) => {
            runEnumDefinitionTests(definition.enums[i], enumStructure);
        });
    });

    describe("variables", () => {
        it("should have the expected number of variables", () => {
            assert.equal(definition.variables.length, expected.variables.length);
        });

        expected.variables.forEach((variableStructure, i) => {
            runVariableDefinitionTests(definition.variables[i], variableStructure);
        });
    });

    describe("exports", () => {
        it("should have the expected number of exports", () => {
            assert.equal(definition.exports.length, expected.exports.length);
        });

        expected.exports.forEach((exportStructure, i) => {
            // defaults
            exportStructure.isExported = exportStructure.isExported == null ? true : exportStructure.isExported;
            exportStructure.hasExportKeyword = exportStructure.hasExportKeyword == null ? true : exportStructure.hasExportKeyword;

            runNamedDefinitionTests(definition.exports[i], exportStructure);
            runExportableDefinitionTests(definition.exports[i], exportStructure);
        });
    });
}
