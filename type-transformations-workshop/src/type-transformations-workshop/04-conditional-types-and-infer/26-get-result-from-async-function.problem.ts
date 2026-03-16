import {Equal, Expect} from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

type InferPropsFromServerSideFunction1<T> = T extends () => Promise<{ props: infer R }>
  ? R
  : never;

type InferPropsFromServerSideFunction2<T extends () => any> = Awaited<ReturnType<T>>['props']


type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction1<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >,
  Expect<
    Equal<
      InferPropsFromServerSideFunction2<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
