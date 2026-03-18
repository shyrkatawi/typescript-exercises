import {Equal, Expect} from "../helpers/type-utils";

function youSayGoodbyeISayHello(greeting: "goodbye"): "hello"
function youSayGoodbyeISayHello(greeting: "hello"): "goodbye"
function youSayGoodbyeISayHello(greeting: "goodbye" | "hello") {
  return greeting === "goodbye" ? "hello" : "goodbye";
}

const result1 = youSayGoodbyeISayHello("hello");
type test1 = [Expect<Equal<typeof result1, "goodbye">>];

const result2 = youSayGoodbyeISayHello("goodbye");
type test2 = [Expect<Equal<typeof result2, "hello">>];
