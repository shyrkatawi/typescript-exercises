import {Equal, Expect} from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type MyAwaited<T> = T extends (Promise<infer A>) ? A : T

type ReturnValue = MyAwaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];
