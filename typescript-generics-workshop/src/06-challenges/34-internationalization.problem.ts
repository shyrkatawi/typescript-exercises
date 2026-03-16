type GetParamKeys<TTranslation extends string> = TTranslation extends ""
  ? []
  : TTranslation extends `${string}{${infer Param}}${infer Tail}`
    ? [Param, ...GetParamKeys<Tail>]
    : [];

type GetParamKeysAsUnion<TTranslation extends string> =
  GetParamKeys<TTranslation>[number];

const translate = (translations: unknown, key: unknown, ...args: unknown[]) => {
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

expect(buttonText).toEqual("Click me!");


const subtitle = translate(translations, "subtitle", {
  count: "2",
});

expect(subtitle).toEqual("You have 2 unread messages.");


// @ts-expect-error
translate(translations, "title");


// @ts-expect-error
translate(translations, "button", {});
