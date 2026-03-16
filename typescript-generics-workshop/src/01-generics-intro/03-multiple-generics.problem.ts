import {Equal, Expect} from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <T1, T2>(a: T1, b: T2): {
  a: T1;
  b: T2;
} => {
  return {
    a,
    b,
  };
};


const result = returnBothOfWhatIPassIn("a", 1);

type test1 = Expect<
  Equal<
    typeof result,
    {
      a: string;
      b: number;
    }
  >
>;
