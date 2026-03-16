import {Equal, Expect} from "../helpers/type-utils";

const returnBothOfWhatIPassIn = (a: unknown, b: unknown) => {
  return {
    a,
    b,
  };
};


const result = returnBothOfWhatIPassIn("a", 1);

expect(result).toEqual({
  a: "a",
  b: 1,
});

type test1 = Expect<
  Equal<
    typeof result,
    {
      a: string;
      b: number;
    }
  >
>;
