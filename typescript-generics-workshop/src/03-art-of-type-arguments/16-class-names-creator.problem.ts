import {Equal, Expect} from "../helpers/type-utils";

const createClassNamesFactory =
  (classes: unknown) =>
    (type: unknown, ...otherClasses: unknown[]) => {
      const classList = [classes[type], ...otherClasses];
      return classList.join(" ");
    };

const getBg = createClassNamesFactory({
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
});


expect(getBg("primary")).toEqual("bg-blue-500");
expect(getBg("secondary")).toEqual("bg-gray-500");


expect(getBg("primary", "text-white", "rounded", "p-4")).toEqual(
  "bg-blue-500 text-white rounded p-4"
);


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
