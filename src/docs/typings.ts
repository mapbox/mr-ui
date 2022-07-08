/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactElement } from 'react';

interface Value {
  [key: string]: any;
}

export interface PropData {
  name?: string;
  type: {
    name: string;
    value?: Value | Array<Value>;
  };
  required: boolean;
  defaultValue: string | undefined;
  description: ReactElement;
}

export interface Example {
  description: ReactElement;
  code: string;
  exampleModule: { default: any };
}

export interface Data {
  name: string;
  description: ReactElement;
  props: {
    [key: string]: PropData;
  };
  examples: Array<Example>;
}

export type Entry = { name: string; content: ReactElement };

export interface Section {
  name: string;
  entries: Array<Entry>;
  intro?: ReactElement;
}
