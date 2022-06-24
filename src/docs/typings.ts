import { ReactElement } from 'react';

export type Entry = { name: string; content: ReactElement };

export interface PropData {
  name?: string;
  type: {
    name: string;
    value?: Array<{
      name?: string;
      value?: string;
      computed?: boolean;
    }>
  };
  required: boolean;
  defaultValue: string;
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

export interface Section {
  name: string;
  entries: Array<Entry>;
  intro?: ReactElement;
};

