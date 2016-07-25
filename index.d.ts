/**
 * Created by kiettv on 7/24/16.
 */
declare module "mailgen" {
    interface Option {
        theme:string;
        product:Product
    }

    interface Product {
        name:string;
        link:string;
        logo?:string;
    }

    interface Content {
        body:ContentBody;
    }

    interface ContentBody {
        name:string;
        intro:string;
        action?:Action;
        outro:string;
    }

    interface Action {
        instructions:string;
        button:Button;
    }

    interface Button {
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
}
