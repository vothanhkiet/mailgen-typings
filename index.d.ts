/**
 * Created by kiettv on 7/24/16.
 */
declare module "mailgen" {
    export class Mailgen{
        public cacheThemes():void;
        public generate(params:any):any;
        public generatePlaintext(params:any):any;
        public parseParams(params:any)
    }
}
