import {Equal, Expect} from "../helpers/type-utils";

export const curryFunction =
  <T>(t: T) =>
    <U>(u: U) =>
      <V>(v: V) => {
        return {
          t,
          u,
          v,
        };
      };


const result = curryFunction(1)(2)(3);

type test = [
  Expect<Equal<typeof result, { t: number; u: number; v: number }>>,
];
