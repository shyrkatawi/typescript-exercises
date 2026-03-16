import { Equal, Expect } from "../helpers/type-utils";

const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeData = typeof fakeDataDefaults

type GetTypeOfKey<T extends object, K extends keyof T> = T[K]

type StringType = GetTypeOfKey<FakeData, 'String'>;
type IntType = GetTypeOfKey<FakeData, 'Int'>
type FloatType = GetTypeOfKey<FakeData, 'Float'>
type BooleanType = GetTypeOfKey<FakeData, 'Boolean'>
type IDType = GetTypeOfKey<FakeData, 'ID'>

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
