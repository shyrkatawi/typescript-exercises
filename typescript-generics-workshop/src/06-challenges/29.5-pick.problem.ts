import {Equal, Expect} from "../helpers/type-utils";

const pick = (obj: {}, picked: string[]) => {
  return picked.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
};


const result = pick(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  ["a", "b"]
);

expect(result).toEqual({a: 1, b: 2});

type test = Expect<Equal<typeof result, { a: number; b: number }>>;


pick(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  [
    "a",
    "b",
    // @ts-expect-error
    "d",
  ]
);
