import {Equal, Expect} from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <T1, T2>(params: { a: T1; b: T2 }) => {
  return {
    first: params.a,
    second: params.b,
  };
};


const result = returnBothOfWhatIPassIn({
  a: "a",
  b: 1,
});


type test1 = Expect<
  Equal<
    typeof result,
    {
      first: string;
      second: number;
    }
  >
>;
