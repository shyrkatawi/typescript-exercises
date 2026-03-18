import {Equal, Expect} from "../helpers/type-utils";

const fetchData = async <TResult = "You must pass a type argument to fetchData">(url: string): Promise<TResult> => {
  return fetch(url).then((response) => response.json());
};


const data1 = await fetchData<{ name: string }>(
  "https://swapi.dev/api/people/1",
);
type tests1 = [Expect<Equal<typeof data1, { name: string }>>];


const data2 = await fetchData("https://swapi.dev/api/people/1");
type tests2 = [
  Expect<Equal<typeof data2, "You must pass a type argument to fetchData">>,
];
