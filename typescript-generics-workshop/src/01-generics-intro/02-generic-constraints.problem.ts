import {Equal, Expect} from "../helpers/type-utils";

export const returnWhatIPassIn = <T extends string = string>(t: T): T => t;

const a = returnWhatIPassIn("a");

type test1 = Expect<Equal<typeof a, "a">>;

// @ts-expect-error
returnWhatIPassIn(1);

// @ts-expect-error
returnWhatIPassIn(true);

// @ts-expect-error
returnWhatIPassIn({
  foo: "bar",
});
