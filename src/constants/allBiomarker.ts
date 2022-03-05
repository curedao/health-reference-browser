import { Biomarker, SpecialParameter } from "src/models/biomarker.model";
import { nutritionParametersAll } from 'src/constants/nutritionTables';
import { sleepParameters } from 'src/constants/sleepTables';
import { medicationParameters, supplementationParameters } from 'src/constants/medicationTables';
import { bloodMetabolitesLipidsCodes } from "./biomarkers/bloodMetabolitesLipidsCodes";
import { loincUniLabOrderCodesMapped } from "./loincCodes";
import { bloodPlasmaProteinCodes } from "./biomarkers/bloodPlasmaProteinCodes";

export const allLoincMetabolitesParameters: SpecialParameter[] = [
    // ...sleepParameters,              // Refactored into first level
    // ...nutritionParametersAll,       // Refactored into first level
    // ...medicationParameters,         // TODO: not containing values, handle interventions to chart
    // ...supplementationParameters,    // TODO: not containing values, handle interventions to chart
    ...loincUniLabOrderCodesMapped,
    ...bloodMetabolitesLipidsCodes,
    ...bloodPlasmaProteinCodes
];