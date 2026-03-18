import {Equal, Expect} from "../helpers/type-utils";

function returnWhatIPassInExceptFor1(t: 1): 2
function returnWhatIPassInExceptFor1<T>(t: T): T
function returnWhatIPassInExceptFor1(t: unknown) {
  if (t === 1) {
    return 2;
  }
  return t;
}


const result = returnWhatIPassInExceptFor1(1);

type test1 = Expect<Equal<typeof result, 2>>;


const a = returnWhatIPassInExceptFor1("a");
const b = returnWhatIPassInExceptFor1("b");
const c = returnWhatIPassInExceptFor1("c");

type tests = [
  Expect<Equal<typeof a, "a">>,
  Expect<Equal<typeof b, "b">>,
  Expect<Equal<typeof c, "c">>
];
