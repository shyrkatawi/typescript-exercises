import {Equal, Expect} from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:qwe/:organisationId";

type Split<T extends string, Separator extends string, Prev extends string[] = []> =
  T extends `${infer Left}${Separator}${infer Right}` ? Split<Right, Separator, [...Prev, Left]> : [...Prev, T]

type ExtractPathParams<T extends string> = {
  [K in Split<T, "/">[number] as K extends `:${string}${'id' | 'Id'}${string}`
    ? K extends `:${infer Key}`
      ? Key
      : never
    : never
  ]: string
}

type A = ExtractPathParams<UserOrganisationPath>

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<Equal<ExtractPathParams<UserOrganisationPath>, { id: string; organisationId: string }>
  >,
];
