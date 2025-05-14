import { ReactNode } from 'react';
import {
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './tabs-constants';

export interface TabItemProps {
  id: string,
  label?: string | ReactNode,
  content?: ReactNode,
  disabled?: boolean,
}

export type SizeType = typeof SIZE_SMALL | typeof SIZE_MEDIUM | typeof SIZE_LARGE;
