export interface ContentTable {
    id: string;
    name: string;
    description?: string;
    references?: string[];
  }

  export interface ContentTableWithValue {
    id: string;
    label: string;
    value: number;
  }