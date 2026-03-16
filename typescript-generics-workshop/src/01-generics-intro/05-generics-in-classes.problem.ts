import {Equal, Expect} from "../helpers/type-utils";

export class Component<TProps> {
  private readonly props: TProps

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}


const result1 = new Component({a: 1, b: 2, c: 3}).getProps();
const result2 = new Component(123).getProps();

type tests = [
  Expect<Equal<typeof result1, { a: number; b: number; c: number }>>,
  Expect<Equal<typeof result2, number>>,
];
