import {Equal, Expect} from "../helpers/type-utils";

export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const cloneComponent = (component: unknown) => {
  return new Component(component.getProps());
};


const component = new Component({a: 1, b: 2, c: 3});

const clonedComponent = cloneComponent(component);

const result = clonedComponent.getProps();

expect(result).toEqual({a: 1, b: 2, c: 3});

type tests = [
  Expect<Equal<typeof result, { a: number; b: number; c: number }>>
];
