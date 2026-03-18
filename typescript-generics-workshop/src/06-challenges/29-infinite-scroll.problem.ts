import {Equal, Expect} from "../helpers/type-utils";

type Params<T> = {
  key: keyof T
  initialRows?: T[]
  fetchRows: () => Promise<T[]>
}

const makeInfiniteScroll = <T>(params: Params<T>) => {
  const data = params.initialRows || [];

  const scroll = async () => {
    const rows = await params.fetchRows();
    data.push(...rows);
  };

  return {
    scroll,
    getRows: () => data,
  };
};


const table = makeInfiniteScroll({
  key: "id",
  fetchRows: () => Promise.resolve([{id: 1, name: "John"}]),
});

await table.scroll();
await table.scroll();

makeInfiniteScroll({
  // @ts-expect-error
  key: "name",
  fetchRows: () =>
    Promise.resolve([
      {
        id: "1",
      },
    ]),
});


const {getRows} = makeInfiniteScroll({
  key: "id",
  initialRows: [
    {
      id: 1,
      name: "John",
    },
  ],
  fetchRows: () => Promise.resolve([]),
});

const rows = getRows();

type tests = [
  Expect<Equal<typeof rows, Array<{ id: number; name: string }>>>
];
