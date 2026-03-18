import {Equal, Expect} from "../helpers/type-utils";

const makeFormValidatorFactory =
  <TValidatorKeys extends string>(
    validators: Record<TValidatorKeys, (value: string) => string | void>
  ) =>
    <TObjKeys extends string>(
      config: Record<TObjKeys, Array<TValidatorKeys>>
    ) => {
      return (values: Record<TObjKeys, string>): Record<TObjKeys, string | undefined> => {
        const errors = {} as any;

        for (const key in config) {
          for (const validator of config[key]) {
            const error = validators[validator](values[key]);
            if (error) {
              errors[key] = error;
              break;
            }
          }
        }

        return errors;
      };
    };

const createFormValidator = makeFormValidatorFactory({
  required: (value) => {
    if (value === "") {
      return "Required";
    }
  },
  minLength: (value) => {
    if (value.length < 5) {
      return "Minimum length is 5";
    }
  },
  email: (value) => {
    if (!value.includes("@")) {
      return "Invalid email";
    }
  },
});

const validateUser = createFormValidator({
  id: ["required"],
  username: ["required", "minLength"],
  email: ["required", "email"],
});


const errors = validateUser({
  id: "1",
  username: "john",
  email: "Blah",
});

type test = Expect<
  Equal<
    typeof errors,
    {
      id: string | undefined;
      username: string | undefined;
      email: string | undefined;
    }
  >
>;


createFormValidator({
  // @ts-expect-error
  id: ["i-do-not-exist"],
});


const validator = createFormValidator({
  id: ["required"],
});

validator({
  // @ts-expect-error
  name: "123",
});
