import {Equal, Expect} from "../helpers/type-utils";

/**
 * This time, let's try and solve this one
 * with function overloads too!
 */
export const youSayGoodbyeISayHello = (greeting: "goodbye" | "hello") => {
  return greeting === "goodbye" ? "hello" : "goodbye";
};


const result = youSayGoodbyeISayHello("hello");

type test = [Expect<Equal<typeof result, "goodbye">>];

expect(result).toEqual("goodbye");


const result = youSayGoodbyeISayHello("goodbye");

type test = [Expect<Equal<typeof result, "hello">>];

expect(result).toEqual("hello");
