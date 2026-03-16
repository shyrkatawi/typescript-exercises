import {Equal, Expect} from "../helpers/type-utils";

const fetchData = async <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => response.json());
};


const data = await fetchData<{ name: string }>(
  "https://swapi.dev/api/people/1",
);

type tests = [Expect<Equal<typeof data, { name: string }>>];
