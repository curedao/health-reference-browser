export interface DataSource {
  id: string;
  name_long: string;
  reference?: string;
  loginUrl?: string;
  logo?: string;
  import_format_single?: string[];
  import_format_multi?: string[];
  import_format_multi_skip_columns?: string[];
  import_format_multi_skip_rows?: number[];
  import_format_multi_header_row?: number;
  import_format_comments?: string[];
  biomarker_id?: string;
  method_id?: string;
  assay_id?: string;
  modality?: string;
  source_version?: string;
  source_device?: string;
  source_type?: string;
  middleware?: (results: any[][], resultsColumnIndex?: number) => DataSourceMiddlewareResult;
}

export interface DataSourceMiddlewareResult {
  data: any[];
  source_name?: string;
  source_version?: string;            // not OMH standard - compare Apple Health kit data
  source_device?: string;             // not OMH standard - compare Apple Health kit data
  source_type?: string;               // not OMH standard - compare Apple Health kit data
  source_data_point_id?: string;
  source_creation_date_time?: string;
  source_last_modification_date_time?: string;
  modality?: string;
}