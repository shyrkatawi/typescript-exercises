import {Equal, Expect} from "../helpers/type-utils";

type Fruit =
  | {
  name: "apple";
  color: "red";
}
  | {
  name: "banana";
  color: "yellow";
}
  | {
  name: "orange";
  color: "orange";
};

type TransformedFruit1 = Fruit extends infer T
  ? T extends { name: infer Name; color: infer Color }
    ? Name extends string ? Color extends string ? `${Name}:${Color}`
        : never
      : never
    : never
  : never;

type TransformedFruit2 = keyof {
  [K in Fruit as `${K['name']}:${K['color']}`]: never
}


type tests = [
  Expect<Equal<TransformedFruit1, "apple:red" | "banana:yellow" | "orange:orange">>,
  Expect<Equal<TransformedFruit2, "apple:red" | "banana:yellow" | "orange:orange">>,
];
