import {Equal, Expect} from "../helpers/type-utils";

function compose<T1, T2>(
  f: (t1: T1) => T2
): (t1: T1) => T2;
function compose<T1, T2, T3>(
  f1: (t1: T1) => T2,
  f2: (t2: T2) => T3
): (t1: T1) => T3;
function compose<T1, T2, T3, T4>(
  f1: (t1: T1) => T2,
  f2: (t2: T2) => T3,
  f3: (t2: T3) => T4
): (t1: T1) => T4;
function compose(...funcs: Array<(input: any) => any>) {
  return (input: any) => {
    return funcs.reduce((acc, fn) => fn(acc), input);
  }
}

const addOne = (num: number) => {
  return num + 1;
};

const addTwoAndStringify = compose(addOne, addOne, String);


const result = addTwoAndStringify(4);

type tests = [Expect<Equal<typeof result, string>>];

const stringifyThenAddOne = compose(
  // addOne takes in a number - so it shouldn't be allowed after
  // a function that returns a string!
  // @ts-expect-error
  String,
  addOne,
);
