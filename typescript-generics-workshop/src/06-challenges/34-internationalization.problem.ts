type GetParamKeys<TTranslation extends string> = TTranslation extends ""
  ? []
  : TTranslation extends `${string}{${infer Param}}${infer Tail}`
    ? [Param, ...GetParamKeys<Tail>]
    : [];

type GetParamKeysAsUnion<TTranslation extends string> =
  GetParamKeys<TTranslation>[number];

const translate = <
  Translations extends Record<string, string>,
  Key extends keyof Translations,
  Args = GetParamKeysAsUnion<Translations[Key]>
>(
  translations: Translations,
  key: Key,
  ...args: Args extends string ? [Record<Args, string>] : []
) => {
  const translation = translations[key];
  const params: any = args[0] || {};

  return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
};

// TESTS

const translations = {
  title: "Hello, {name}!",
  subtitle: "You have {count} unread messages.",
  button: "Click me!",
} as const;


const buttonText = translate(translations, "button");

const subtitle = translate(translations, "subtitle", {
  count: "2",
});

// @ts-expect-error
translate(translations, "title");


// @ts-expect-error
translate(translations, "button", {});
