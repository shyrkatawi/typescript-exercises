import {Equal, Expect} from "../helpers/type-utils";

const typedObjectKeys = <T extends Record<string, any>>(obj: T):  Array<keyof T>=> {
  return Object.keys(obj);
};


const result1 = typedObjectKeys({
  a: 1,
  b: 2,
});

type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
