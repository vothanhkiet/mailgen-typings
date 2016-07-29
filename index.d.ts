/**
 * Created by kiettv on 7/24/16.
 */
export declare interface Option {
    theme:string;
    product:Product
}

export declare interface Product {
    name:string;
    link:string;
    logo?:string;
}

export declare interface Content {
    body:ContentBody;
}

export declare interface ContentBody {
    name:string;
    intro:string;
    action?:Action;
    outro:string;
}

export interface Action {
    instructions:string;
    button:Button;
}

export declare interface Button {
    color:string;
    text:string;
    link:string;
}

export declare class Mailgen {
    constructor(opts:Option);

    public cacheThemes():void;

    public generate(params:Content):any;

    public generatePlaintext(params:Content):any;

    public parseParams(params:any)
}

export = Mailgen;
