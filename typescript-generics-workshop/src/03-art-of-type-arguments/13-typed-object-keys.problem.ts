import {Equal, Expect} from "../helpers/type-utils";

/**
 * There are two possible solutions to this problem - and it's
 * to do with the way you specify the generic. Can you get
 * both solutions?
 */
const typedObjectKeys = (obj: unknown) => {
  return Object.keys(obj);
};


const result1 = typedObjectKeys({
  a: 1,
  b: 2,
});

expect(result1).toEqual(["a", "b"]);

type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
