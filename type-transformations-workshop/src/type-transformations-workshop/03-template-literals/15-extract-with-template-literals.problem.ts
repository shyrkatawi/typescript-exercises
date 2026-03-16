import {Equal, Expect} from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type GetDynamicRoutes<T extends string> = T extends `/${string}/:${string}` ? T : never
type DynamicRoutes1 = GetDynamicRoutes<Routes>;

type DynamicRoutes2 = Extract<Routes, `/${string}/:${string}`>;

type tests = [
  Expect<Equal<DynamicRoutes1, "/users/:id" | "/posts/:id">>,
  Expect<Equal<DynamicRoutes2, "/users/:id" | "/posts/:id">>
];
