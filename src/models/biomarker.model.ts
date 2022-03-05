export interface BiomarkerExtended extends Biomarker {
  //inchi_key: string, // TODO: see https://hmdb.ca/
  // Ranges as multi-dimensional format: 
  // Gender: { Age: [[min/max allowed], [min/max medical], [min/max optimal]], ... }         ...  , (weight, height, ethnicity, ...)
  range_male?: { [key: string]: number[][] }; // e.g. { 0: [[0,100], [25,85], [45,75]], 100: [[0,100], [25,85], [45,75]]
  range_female?: { [key: string]: number[][] };
  input_settings?: BiomarkerInputSettings;
  // Importing
  import_format_single?: string[];
};

export interface Biomarker {
  id: string;
  loinc?: string;
  aliases?: string[];
  category?: string;
  type?: string;
  subtype?: string;
  classification?: string;
  name_short?: string;
  name_long: string;
  default_value?: number;
  unit: string;   // UCUM Code
  value_type?: BiomarkerInputValues;
  description?: string;
  references?: string[];
};

export interface BiomarkerInputSettings {
  value_2?: boolean;
  unit_2?: string;
  time_interval?: boolean;
  default_value?: boolean | number;
  hideMethod?: boolean; // if method field should be shown
  hideValue?: boolean; // if value field should be shown
  // Show medication or supplementation fields:
  description?: boolean;
  route?: boolean;
  prescription_trigger?: boolean;
  schedule?: boolean;
  generic_name?: boolean;
  trade_name?: boolean;
  strength?: boolean;
  strength_unit?: boolean,
  rxnorm_code?: boolean;
  // TODO:
  // sleep 
  // Metabolomics blood scan
  // Compound biomarkers
};

export interface SpecialParameter extends Biomarker {
  imperial_unit?: string;
  [key: string]: any
};

export type BiomarkerInputValues = 'bool' | 'int' | 'float' | 'rating_5' | 'rating_10' | 'percentage' | string;