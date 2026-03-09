import {Equal, Expect} from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint1<T> = T extends { getPoint: () => infer R } ? R : never;

type GetPoint2<T> = T extends MyComplexInterface<any, any, any, infer R> ? R : never;

type tests = [
  Expect<Equal<GetPoint1<Example>, { x: 12; y: 14 }>>,
  Expect<Equal<GetPoint2<Example>, { x: 12; y: 14 }>>
];
