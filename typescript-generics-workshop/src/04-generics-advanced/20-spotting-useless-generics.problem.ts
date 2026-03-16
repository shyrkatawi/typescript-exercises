import {Equal, Expect} from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <T1, T2>(params: {
  a: T1;
  b: T2;
}): [T1, T2] => {
  return [params.a, params.b];
};


const result = returnBothOfWhatIPassIn({
  a: "a",
  b: 1,
});

expect(result).toEqual(["a", 1]);

type test1 = Expect<Equal<typeof result, [string, number]>>;
