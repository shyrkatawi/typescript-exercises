import {Equal, Expect} from "../helpers/type-utils";

const createClassNamesFactory =
  <T extends Record<string, string>>(classes: T) =>
    (type: keyof T, ...otherClasses: string[]) => {
      const classList = [classes[type], ...otherClasses];
      return classList.join(" ");
    };

const getBg = createClassNamesFactory({
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
});



const result = getBg("primary");

type test = Expect<Equal<typeof result, string>>;

// @ts-expect-error
getBg("123123");

// @ts-expect-error
createClassNamesFactory([]);

// @ts-expect-error
createClassNamesFactory(123);

createClassNamesFactory({
  // @ts-expect-error
  a: 1,
});
