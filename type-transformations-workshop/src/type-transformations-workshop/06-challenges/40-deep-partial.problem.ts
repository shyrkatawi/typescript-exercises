import {Equal, Expect} from "../helpers/type-utils";

type Primitive = string | number | boolean | bigint | symbol | null | undefined;

type DeepPartial<T> =
  T extends Primitive ? T :
    T extends Array<infer ArrayType> ? Array<DeepPartial<ArrayType>> :
      {
        [K in keyof T]?: DeepPartial<T[K]>
      };

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
        };
      }
    >
  >
];
