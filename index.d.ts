/**
 * Created by kiettv on 7/24/16.
 */
export interface Option {
    theme:string;
    product:Product
}

export interface Product {
    name:string;
    link:string;
    logo?:string;
}

export interface Content {
    body:ContentBody;
}

export interface ContentBody {
    name:string;
    intro:string;
    action?:Action;
    outro:string;
}

export interface Action {
    instructions:string;
    button:Button;
}

export interface Button {
    color:string;
    text:string;
    link:string;
}

export class Mailgen {
    constructor(opts:Option);

    public cacheThemes():void;

    public generate(params:Content):any;

    public generatePlaintext(params:Content):any;

    public parseParams(params:any)
}
