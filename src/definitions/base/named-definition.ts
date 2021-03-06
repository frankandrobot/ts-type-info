import * as ts from "typescript";

export interface IBaseNamedDefinition {
    name: string;
}

export interface INamedDefinition extends IBaseNamedDefinition {
    fillName(symbol: ts.Symbol): void;
}

export abstract class NamedDefinition implements INamedDefinition {
    name: string;

    fillName(symbol: ts.Symbol) {
        this.name = symbol.getName();
    }
}
