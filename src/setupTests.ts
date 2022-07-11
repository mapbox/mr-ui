// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import './test-utils/raf';
import './test-utils/resize-observer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });

// https://stackoverflow.com/questions/71521976
global.DOMRect = class DOMRect {
  top:number = 0;
  bottom:number = 0;
  left:number = 0;
  right:number = 0;

  constructor (
    public x = 0,
    public y = 0,
    public width = 0,
    public height = 0
  ) {};

  static fromRect(other?: DOMRectInit): DOMRect {
    return new DOMRect(other.x, other.y, other.width, other.height);
  }

  toJSON() {
    return JSON.stringify(this);
  }
}
