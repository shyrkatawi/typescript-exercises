import {Equal, Expect} from "../helpers/type-utils";

const makeInfiniteScroll = (params: unknown) => {
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

expect(table.getRows()).toEqual([
  {id: 1, name: "John"},
  {id: 1, name: "John"},
]);


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

expect(rows).toEqual([
  {
    id: 1,
    name: "John",
  },
]);

type tests = [
  Expect<Equal<typeof rows, Array<{ id: number; name: string }>>>
];
