import {Equal, Expect} from "../helpers/type-utils";

function youSayGoodbyeISayHello<T extends "hello" | "goodbye">(greeting: T):
  T extends "goodbye" ? "hello" : "goodbye" {
  return (greeting === "goodbye" ? "hello" : "goodbye") as any;
}

const result1 = youSayGoodbyeISayHello("hello");

type test1 = [Expect<Equal<typeof result1, "goodbye">>];

const result2 = youSayGoodbyeISayHello("goodbye");

type test2 = [Expect<Equal<typeof result2, "hello">>];

