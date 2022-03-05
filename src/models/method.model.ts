export interface Method {
    id: string;
    //inchi_key: string, // TODO: see https://hmdb.ca/
    name: string;
    biomarkers?: string[];
    error?: number;     // Error in % in one direction
    quality?: string;
    description?: string;
    references?: string[];
  }
