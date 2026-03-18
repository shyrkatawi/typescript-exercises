import {Equal, Expect} from "../helpers/type-utils";

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

type Obj = typeof obj
type ObjKey = keyof Obj;

function getObjValue(): Obj['a']
function getObjValue<K extends ObjKey>(key: K): Obj[K]
function getObjValue(key: ObjKey = "a") {
  return obj[key];
}

const one = getObjValue("a");
const oneByDefault = getObjValue();
const two = getObjValue("b");
const three = getObjValue("c");

type tests = [
  Expect<Equal<typeof one, 1>>,
  Expect<Equal<typeof oneByDefault, 1>>,
  Expect<Equal<typeof two, 2>>,
  Expect<Equal<typeof three, 3>>
];
