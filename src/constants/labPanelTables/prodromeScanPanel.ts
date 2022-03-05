import { SpecialParameter } from "src/models/biomarker.model";
import prodromeScanJson from "src/constants/labPanelTables/prodromeScan-1.0.json";

export const prodromeScanPanel: SpecialParameter[] = [
    ...prodromeScanJson
];
