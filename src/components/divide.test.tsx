// toTrow
import { divide, ZeroDivisorError } from "./divide";

it('0で割るとエラーが発生する', () => {
    expect(() => divide(10, 0)).toThrow();
    expect(() => divide(10, 0)).toThrow('0で割ることはできない');
    expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
})