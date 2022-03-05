import { SpecialParameter } from "src/models/biomarker.model";

export const urineAnalysisTestStripPanel: SpecialParameter[] = [
    {
        id: '20408-1',
        name_long: 'Leukocytes',
        unit: '{#}/uL',
        default_value: 0
    },
    {
        id: '5802-4',
        name_long: 'Nitrite',
        unit: '{bool}',
        default_value: 0
    },
    {
        id: '20405-7',
        name_long: 'Urobilinogen',
        unit: 'mg/dL',
        default_value: 0.1
    },
    {
        id: '2888-6',
        name_long: 'Protein',
        unit: 'mg/dL',
        default_value: 0
    },
    {
        id: '5803-2',
        name_long: 'pH',
        unit: '[pH]',
        default_value: 7
    },
    {
        id: '49137-3',
        name_long: 'Blood',
        unit: '{#}/uL',
        default_value: 0
    },
    {
        id: '5811-5',
        name_long: 'Specific Gravity',
        unit: '{urine specific gravity}',
        default_value: 1.015
    },
    {
        id: '5797-6',
        name_long: 'Ketones',
        unit: 'mg/dL',
        default_value: 0
    },
    {
        id: '1977-8',
        name_long: 'Bilirubin',
        unit: '{bool}',
        default_value: 0
    },
    {
        id: '5792-7',
        name_long: 'Glucose',
        unit: 'mg/dL',
        default_value: 0
    },
    {
        id: '5768-7',
        name_long: 'Ascorbic Acid',
        unit: 'mg/dL',
        default_value: 0
    },
];