import {Equal, Expect} from "../helpers/type-utils";

export const concatenateFirstNameAndLastName = <T extends {
  firstName: string;
  lastName: string;
}>(user: T): T & { fullName: string } => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};


const users1 = [{firstName: "Matt", lastName: "Pocock"}];
const newUsers1 = users1.map(concatenateFirstNameAndLastName);
type tests1 = [
  Expect<
    Equal<
      typeof newUsers1,
      Array<{ firstName: string; lastName: string } & { fullName: string }>
    >
  >,
];


const users2 = [
  {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
  },
];
const newUsers2 = users2.map(concatenateFirstNameAndLastName);
type tests = [
  Expect<
    Equal<
      typeof newUsers2,
      Array<
        { id: number; firstName: string; lastName: string } & {
        fullName: string;
      }
      >
    >
  >,
];


const users3 = [
  {
    firstName: "Matt",
  },
];

const newUsers3 = users3.map(
  // @ts-expect-error
  concatenateFirstNameAndLastName,
);
