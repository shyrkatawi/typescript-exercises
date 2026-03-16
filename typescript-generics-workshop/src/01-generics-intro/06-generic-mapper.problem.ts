import {Equal, Expect} from "../helpers/type-utils";

export const concatenateFirstNameAndLastName = (user: unknown) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};


const users = [
  {
    firstName: "Matt",
    lastName: "Pocock",
  },
];

const newUsers = users.map(concatenateFirstNameAndLastName);

type tests = [
  Expect<
    Equal<
      typeof newUsers,
      Array<{ firstName: string; lastName: string } & { fullName: string }>
    >
  >,
];


const users = [
  {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
  },
];

const newUsers = users.map(concatenateFirstNameAndLastName);


type tests = [
  Expect<
    Equal<
      typeof newUsers,
      Array<
        { id: number; firstName: string; lastName: string } & {
        fullName: string;
      }
      >
    >
  >,
];


const users = [
  {
    firstName: "Matt",
  },
];

const newUsers = users.map(
  // @ts-expect-error
  concatenateFirstNameAndLastName,
);
