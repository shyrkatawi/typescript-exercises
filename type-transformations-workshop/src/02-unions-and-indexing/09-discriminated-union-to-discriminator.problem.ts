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

type GetEvents<E> = E extends { type: infer T } ? T : never

type EventType = GetEvents<Event>

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
