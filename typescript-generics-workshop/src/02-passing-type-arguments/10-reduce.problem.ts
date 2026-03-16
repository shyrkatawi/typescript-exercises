import {Equal, Expect} from "../helpers/type-utils";

const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

const obj = array.reduce<Record<string, { name: string }>>(
  (accum, item) => {
    accum[item.name] = item;
    return accum;
  }, {});

type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
