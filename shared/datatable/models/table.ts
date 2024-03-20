import { ReactNode } from 'react';

export interface DataTableCol<T> {
  headerName: string;
  field: keyof T;
  renderHeader?: (headerName: string) => ReactNode;
  renderCell?: (cellValue: any, rowValue?: T) => ReactNode;
}

export interface DataTableRow extends Record<string, any> {
  id: number | string;
}

export type TableRowSize = 'small' | 'medium';

export enum TableTemplate {
  LOADING,
  EMPTY,
  DATA,
}
