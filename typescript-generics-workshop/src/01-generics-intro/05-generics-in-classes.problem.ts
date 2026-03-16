import {Equal, Expect} from "../helpers/type-utils";

export class Component {
  private props: unknown;

  constructor(props: unknown) {
    this.props = props;
  }

  getProps = () => this.props;
}


const component = new Component({a: 1, b: 2, c: 3});

const result = component.getProps();

expect(result).toEqual({a: 1, b: 2, c: 3});

type tests = [
  Expect<Equal<typeof result, { a: number; b: number; c: number }>>,
];
