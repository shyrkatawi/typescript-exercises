import {Equal, Expect} from "../helpers/type-utils";

type Path = "Users/John/Documents/notes.txt";

type Split<Separator extends string, T extends `${string}${Separator}${string}` | string, Prev extends string[] = []> =
  T extends `${infer Left}${Separator}${infer Right}`
    ? Split<Separator, Right, [...Prev, Left]>
    : [...Prev, T]

type SplitPath = Split<"/", Path>;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
