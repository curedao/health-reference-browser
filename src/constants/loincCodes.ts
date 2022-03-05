import loincUniLabOrderCodes from 'src/constants/loinc_uni_lab_order_codes-2.1.json';
import { SpecialParameter } from 'src/models/biomarker.model';
import { biomarkerLaboratoryIds } from './biomarkerTables';

// Search for LOINC Codes here: https://search.loinc.org/searchLOINC/search.zul


export interface LoincUniLabOrderCodes {
    LOINC_NUM: string;
    LONG_COMMON_NAME: string;
    ORDER_OBS: string;
}

const loincUniLabOrderCodesExtended: LoincUniLabOrderCodes[] = [
    ...loincUniLabOrderCodes,
    // Urine Test Stripe
    {
        LOINC_NUM: "20408-1",
        LONG_COMMON_NAME: "Leukocytes [#/volume] in Urine by Test strip",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "5802-4",
        LONG_COMMON_NAME: "Nitrite [Presence] in Urine by Test strip",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "49137-3",
        LONG_COMMON_NAME: "Hemoglobin [Mass/volume] in Urine by Test strip",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "5768-7",
        LONG_COMMON_NAME: "Ascorbate [Mass/volume] in Urine by Test strip",
        ORDER_OBS: "Both"
    },

    // Glucose finger  prick
    {
        LOINC_NUM: "41604-0",
        LONG_COMMON_NAME: "Fasting glucose [Mass/volume] in Capillary blood by Glucometer",
        ORDER_OBS: "Both"
    },
    // Blood prodrome scan
    {
        LOINC_NUM: "93876-1",
        LONG_COMMON_NAME: "Ceramide risk score in Plasma by calculation",
        ORDER_OBS: "Both"
    },
    // Blood panel standard
    {
        LOINC_NUM: "10834-0",
        LONG_COMMON_NAME: "Globulin [Mass/volume] in Serum by calculation",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "1759-0",
        LONG_COMMON_NAME: "Albumin/Globulin [Mass Ratio] in Serum or Plasma",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "88294-4",
        LONG_COMMON_NAME: "Glomerular filtration rate/1.73 sq M.predicted among non-blacks [Volume Rate/Area] in Serum, Plasma or Blood by Creatinine-based formula (CKD-EPI)",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "88293-6",
        LONG_COMMON_NAME: "Glomerular filtration rate/1.73 sq M.predicted among blacks [Volume Rate/Area] in Serum, Plasma or Blood by Creatinine-based formula (CKD-EPI)",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "4544-3",
        LONG_COMMON_NAME: "Hematocrit [Volume Fraction] of Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "787-2",
        LONG_COMMON_NAME: "MCV [Entitic volume] by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "785-6",
        LONG_COMMON_NAME: "MCH [Entitic mass] by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "786-4",
        LONG_COMMON_NAME: "MCHC [Mass/volume] by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "788-0",
        LONG_COMMON_NAME: "Erythrocyte distribution width [Ratio] by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "770-8",
        LONG_COMMON_NAME: "Neutrophils/100 leukocytes in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "736-9",
        LONG_COMMON_NAME: "Lymphocytes/100 leukocytes in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "5905-5",
        LONG_COMMON_NAME: "Monocytes/100 leukocytes in Blood by Automated count",
        ORDER_OBS: "Both"
    }, 
    {
        LOINC_NUM: "713-8",
        LONG_COMMON_NAME: "Eosinophils/100 leukocytes in Blood by Automated count",
        ORDER_OBS: "Both"
    }, 
    {
        LOINC_NUM: "706-2",
        LONG_COMMON_NAME: "Basophils/100 leukocytes in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "751-8",
        LONG_COMMON_NAME: "Neutrophils [#/volume] in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "731-0",
        LONG_COMMON_NAME: "Lymphocytes [#/volume] in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "742-7",
        LONG_COMMON_NAME: "Monocytes [#/volume] in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "704-7",
        LONG_COMMON_NAME: "Basophils [#/volume] in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "71695-1",
        LONG_COMMON_NAME: "Immature granulocytes/100 leukocytes in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "53115-2",
        LONG_COMMON_NAME: "Immature granulocytes [#/volume] in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "58413-6",
        LONG_COMMON_NAME: "Nucleated erythrocytes/100 leukocytes [Ratio] in Blood by Automated count",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "13458-5",
        LONG_COMMON_NAME: "Cholesterol in VLDL [Mass/volume] in Serum or Plasma by calculation",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "13457-7",
        LONG_COMMON_NAME: "Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "43396-1",
        LONG_COMMON_NAME: "Cholesterol non HDL [Mass/volume] in Serum or Plasma",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "9830-1",
        LONG_COMMON_NAME: "Cholesterol.total/Cholesterol in HDL [Mass Ratio] in Serum or Plasma",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "56469-0",
        LONG_COMMON_NAME: "Cardiac heart disease risk [Ratio] in Serum or Plasma",
        ORDER_OBS: "Both"
    },
    {
        LOINC_NUM: "2532-0",
        LONG_COMMON_NAME: "Lactate dehydrogenase [Enzymatic activity/volume] in Serum or Plasma",
        ORDER_OBS: "Both"
    },
];

export const loincUniLabOrderCodesMapped: SpecialParameter[] = [
    ...(loincUniLabOrderCodesExtended || []).map(l => { return { id: l.LOINC_NUM, name_long: l.LONG_COMMON_NAME, unit: '' } }),

];

export const getLoincLabFilterTerms = (biomarkerId: string) => {
    switch (biomarkerId) {
        case 'blood_analysis':
            return ['blood', 'serum', 'plasma'];
        case 'urine_analysis':
            return ['urin'];
        case 'saliva_analysis':
            return ['saliva', 'sputum', 'throat', 'oral'];
        case 'stool_analysis':
            return ['stool', 'feces', 'fecal', 'rectal'];
        default:
            return [];
    }
};

export const getLoincCode = {
    index: {
        ...Object.assign({}, {}, ...(loincUniLabOrderCodesMapped || []).map(l => { return { [l.id]: l } }))
    },
    get: function (loincCode): SpecialParameter {
        return this.index[loincCode];
    },
    filteredList: {
        ...Object.assign({}, {}, ...(biomarkerLaboratoryIds || []).map(bid => {
            return {
                [bid]: [...loincUniLabOrderCodesMapped.filter(l => getLoincLabFilterTerms(bid).some(el => l.name_long.toLowerCase().includes(el)))],
            }
        }))
    },
    getFilteredList: function (biomarkerId): SpecialParameter[] {
        return this.filteredList[biomarkerId] || [];
    },
};