import {Equal, Expect} from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;
type Fruits = typeof fruits

type AppleOrBanana1 = Fruits[0] | Fruits[1];
type AppleOrBanana2 = Fruits[0 | 1];
type AppleOrBanana3 = Exclude<Fruits[number], 'orange'>;

type Fruit = Fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana1, "apple" | "banana">>,
  Expect<Equal<AppleOrBanana2, "apple" | "banana">>,
  Expect<Equal<AppleOrBanana3, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
