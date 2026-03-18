import {Equal, Expect} from "../helpers/type-utils";

function useData<T>(params: { fetchData: () => Promise<T>; initialData: T }): { getData: () => T }
function useData<T>(params: { fetchData: () => Promise<T>; initialData?: T }): { getData: () => T | undefined; }
function useData<T>(params: { fetchData: () => Promise<T>; initialData?: T }): { getData: () => T | undefined; } {
  let data = params.initialData;

  params.fetchData().then((d) => {
    data = d;
  });

  return {
    getData: () => data,
  };
}


const numData1 = useData({
  fetchData: () => Promise.resolve(1),
});
const data1 = numData1.getData();
type Test1 = Expect<Equal<typeof data1, number | undefined>>;


const numData2 = useData({
  fetchData: () => Promise.resolve(1),
  initialData: 2,
});
const data2 = numData2.getData();
type Test2 = Expect<Equal<typeof data2, number>>;
