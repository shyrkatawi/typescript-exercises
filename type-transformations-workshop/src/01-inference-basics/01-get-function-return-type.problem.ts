import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

type MyReturnType<T> = T extends () => infer R ? R : never

type MyFuncReturn = MyReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
