import {Equal, Expect} from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana1 = "apple" | "banana" extends Fruit
  ? "apple" | "banana"
  : never;

type AppleOrBanana2 = Fruit extends infer T
  ? (T extends "apple" | "banana" ? T : never)
  : never;

type tests = [
  Expect<Equal<AppleOrBanana1, "apple" | "banana">>,
  Expect<Equal<AppleOrBanana2, "apple" | "banana">>
];
