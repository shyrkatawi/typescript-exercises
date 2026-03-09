import {Equal, Expect} from "../helpers/type-utils";

type Event =
  | {
  type: "click";
  event: MouseEvent;
}
  | {
  type: "focus";
  event: FocusEvent;
}
  | {
  type: "keydown";
  event: KeyboardEvent;
};

type GetEventByType<T extends Event['type']> = Extract<Event, { type: T }>

type ClickEvent = GetEventByType<'click'>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
