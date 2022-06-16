export class Divisa {
    result!: Float32Array;
    totype!: string;
    fromvalue!: Float32Array;
    fromtype!: string;
    Divisa(result: Float32Array, totype: string, fromvalue: Float32Array, fromtype: string) {
        this.result = result;
        this.totype = totype;
        this.fromvalue = fromvalue;
        this.fromtype = fromtype;

    }
}