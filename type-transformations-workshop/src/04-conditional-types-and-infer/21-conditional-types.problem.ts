import {Equal, Expect} from "../helpers/type-utils";

type Hello = 'hello'
type Goodbye = 'goodbye'

type YouSayGoodbyeAndISayHello<T extends Hello | Goodbye> = T extends Hello ? Goodbye : Hello;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
