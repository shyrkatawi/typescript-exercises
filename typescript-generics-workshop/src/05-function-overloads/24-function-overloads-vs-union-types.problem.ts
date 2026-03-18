import {Equal, Expect} from "../helpers/type-utils";

type GeneratorFn<T> = () => T
type GeneratorObj<T> = { run: GeneratorFn<T> }

function runGenerator<T>(generator: GeneratorFn<T> | GeneratorObj<T>): T {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}


const result1 = runGenerator({run: () => "hello"});
type test1 = Expect<Equal<typeof result1, string>>;

const result2 = runGenerator(() => "hello");
type test2 = Expect<Equal<typeof result2, string>>;
