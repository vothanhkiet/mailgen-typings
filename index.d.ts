/**
 * Created by kiettv on 7/24/16.
 */
declare interface Option {
    theme:string;
    product:Product
}

declare interface Product {
    name:string;
    link:string;
    logo?:string;
}

declare interface Content {
    body:ContentBody;
}

declare interface ContentBody {
    name:string;
    intro:string;
    action?:Action;
    outro:string;
}

interface Action {
    instructions:string;
    button:Button;
}

declare interface Button {
    color:string;
    text:string;
    link:string;
}

declare class Mailgen {
    constructor(opts:Option);

    public cacheThemes():void;

    public generate(params:Content):any;

    public generatePlaintext(params:Content):any;

    public parseParams(params:any)
}

namespace Mailgen {
}

export = Mailgen;
