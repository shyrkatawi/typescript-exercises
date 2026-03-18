import {Equal, Expect} from "../helpers/type-utils";

const pick = <T extends Record<string, any>, K extends keyof T>(obj: T, picked: Array<K>) => {
  return picked.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<T, K>);
};


const result = pick(
  {
    a: 1,
    b: 'st',
    c: 3,
  },
  ["a", "b"]
);

type test = Expect<Equal<typeof result, { a: number; b: string }>>;

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
