import {Equal, Expect} from "../helpers/type-utils";

const makeSafe =
  <TParams extends any[], TReturn>(func: (...args: TParams) => TReturn) =>
    (
      ...args: TParams
    ):
      | {
      type: "success";
      result: TReturn;
    }
      | {
      type: "failure";
      error: Error;
    } => {
      try {
        const result = func(...args);

        return {
          type: "success",
          result,
        };
      } catch (e) {
        return {
          type: "failure",
          error: e as Error,
        };
      }
    };


const result1 = makeSafe(() => 1)();

type tests1 = [
  Expect<
    Equal<
      typeof result1,
      | {
      type: "success";
      result: number;
    }
      | {
      type: "failure";
      error: Error;
    }
    >
  >,
];


const result2 = makeSafe(() => {
  if (1 > 2) {
    return "123";
  }
  throw new Error("Oh dear");
})();


type tests2 = [
  Expect<
    Equal<
      typeof result2,
      | {
      type: "success";
      result: string;
    }
      | {
      type: "failure";
      error: Error;
    }
    >
  >,
];


const func = makeSafe((a: number, b: string) => {
  return `${a} ${b}`;
});

// @ts-expect-error
func();

// @ts-expect-error
func(1, 1);

func(1, "1");
