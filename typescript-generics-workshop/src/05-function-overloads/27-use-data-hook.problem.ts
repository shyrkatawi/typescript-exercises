import {Equal, Expect} from "../helpers/type-utils";

// You'll need to use function overloads to figure this out!
function useData<T>(params: { fetchData: () => Promise<T>; initialData?: T }): {
  getData: () => T | undefined;
} {
  let data = params.initialData;

  params.fetchData().then((d) => {
    data = d;
  });

  return {
    getData: () => data,
  };
}


const numData = useData({
  fetchData: () => Promise.resolve(1),
});

const data = numData.getData();

type Test1 = Expect<Equal<typeof data, number | undefined>>;


const numData = useData({
  fetchData: () => Promise.resolve(1),
  initialData: 2,
});

const data = numData.getData();

type Test1 = Expect<Equal<typeof data, number>>;
