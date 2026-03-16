import {Equal, Expect} from "../helpers/type-utils";

function runGenerator(generator: unknown) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}


const result = runGenerator({
  run: () => "hello",
});

expect(result).toBe("hello");

type test1 = Expect<Equal<typeof result, string>>;


const result = runGenerator(() => "hello");

expect(result).toBe("hello");

type test1 = Expect<Equal<typeof result, string>>;
