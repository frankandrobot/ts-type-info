﻿import {getStringInfo} from "./../../../main";
import {runFileDefinitionTests} from "./../../test-helpers";
import {NamespaceDeclarationType} from "./../../../definitions";

describe("namespace tests", () => {
    const code = `
namespace MyNamespace {
    class MyModuleClass {}
    export class MyExportedModuleClass {}
    enum MyModuleEnum {}
    export enum MyExportedModuleEnum {}
    function myModuleFunction() {}
    export function myExportedModuleFunction() {}
    interface MyModuleInterface {}
    export interface MyExportedModuleInterface {}
    module MyInnerModule {
    }
    export module MyInnerExportedModule {
        export class MyInnerModuleClass {}
    }
    namespace MyInnerNamespace {
    }
    export namespace MyInnerExportedNamespace {
        export class MyInnerNamespaceClass {}
    }
}
export namespace MyExportedNamespace {
}`;

    const def = getStringInfo(code);

    runFileDefinitionTests(def, {
        namespaces: [{
            name: "MyNamespace",
            declarationType: NamespaceDeclarationType.Namespace,
            classes: [
                { name: "MyModuleClass" },
                { name: "MyExportedModuleClass", isExported: true, hasExportKeyword: true }
            ],
            enums: [
                { name: "MyModuleEnum" },
                { name: "MyExportedModuleEnum", isExported: true, hasExportKeyword: true }
            ],
            functions: [
                { name: "myModuleFunction" },
                { name: "myExportedModuleFunction", isExported: true, hasExportKeyword: true }
            ],
            interfaces: [
                { name: "MyModuleInterface" },
                { name: "MyExportedModuleInterface", isExported: true, hasExportKeyword: true }
            ],
            namespaces: [{
                name: "MyInnerModule",
                declarationType: NamespaceDeclarationType.Module
            }, {
                name: "MyInnerExportedModule",
                declarationType: NamespaceDeclarationType.Module,
                isExported: true,
                hasExportKeyword: true,
                classes: [
                    { name: "MyInnerModuleClass", isExported: true, hasExportKeyword: true }
                ],
                exports: [{
                    name: "MyInnerModuleClass"
                }]
            }, {
                name: "MyInnerNamespace",
                declarationType: NamespaceDeclarationType.Namespace
            }, {
                name: "MyInnerExportedNamespace",
                declarationType: NamespaceDeclarationType.Namespace,
                isExported: true,
                hasExportKeyword: true,
                classes: [
                    { name: "MyInnerNamespaceClass", isExported: true, hasExportKeyword: true }
                ],
                exports: [{
                    name: "MyInnerNamespaceClass"
                }]
            }],
            exports: [{
                name: "MyExportedModuleClass"
            }, {
                name: "MyExportedModuleEnum"
            }, {
                name: "myExportedModuleFunction"
            }, {
                name: "MyExportedModuleInterface"
            }, {
                name: "MyInnerExportedModule"
            }, {
                name: "MyInnerExportedNamespace"
            }]
        }, {
            name: "MyExportedNamespace",
            declarationType: NamespaceDeclarationType.Namespace,
            isExported: true,
            hasExportKeyword: true
        }],
        exports: [{
            name: "MyExportedNamespace"
        }]
    });
});
