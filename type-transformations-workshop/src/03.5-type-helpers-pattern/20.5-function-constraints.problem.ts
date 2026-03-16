import {Equal, Expect} from "../helpers/type-utils";

type GetParametersAndReturnType<T extends (...args: any) => any> =
  T extends (...args: infer Params) => infer Return
    ? { params: Params; returnValue: Return; }
    : never;

type tests = [
  Expect<
    Equal<
      GetParametersAndReturnType<() => string>,
      { params: []; returnValue: string }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(s: string) => void>,
      { params: [string]; returnValue: void }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(n: number, b: boolean) => number>,
      { params: [number, boolean]; returnValue: number }
    >
  >,
];
