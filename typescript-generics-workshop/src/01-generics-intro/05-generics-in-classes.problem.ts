import {Equal, Expect} from "../helpers/type-utils";

export class Component<T1,T2,T3> {
  private props: {
    a: T1;
    b: T2;
    c: T3;
  };

  constructor(props: { a: T1; b: T2; c: T3 }) {
    this.props = props;
  }

  getProps = () => this.props;
}


const component = new Component({a: 1, b: 2, c: 3});

const result = component.getProps();


type tests = [
  Expect<Equal<typeof result, { a: number; b: number; c: number }>>,
];
