import { nutritionParametersAll } from 'src/constants/nutritionTables';
import { sleepParameters } from 'src/constants/sleepTables';
import { medicationParameters, supplementationParameters } from 'src/constants/medicationTables';
import { ContentTable } from 'src/models/table.model';
import { bloodMetabolitesLipidsCodes } from './biomarkers/bloodMetabolitesLipidsCodes';
import { bloodPlasmaProteinCodes } from './biomarkers/bloodPlasmaProteinCodes';
import { loincUniLabOrderCodesMapped } from './loincCodes';
import { Biomarker, BiomarkerExtended } from 'src/models/biomarker.model';

export const biomarkerCustomIds: string[] = ['custom_bool', 'custom_int', 'custom_rating_5', 'custom_rating_10', 'custom_float', 'custom_percentage'];

export const biomarkerLaboratoryIds: string[] = ['specimen_analysis', 'blood_analysis', 'urine_analysis', 'saliva_analysis', 'stool_analysis'];

export const biomarkerSpecialIdsWithParameters: string[] = [ // Add biomarker here with parameter table
    'sleep_episode',
    'medication_prescription',
    'supplementation',
    'nutrition'
];

export const biomarkerSpecialIds: string[] = [ // Add biomarker here with not single ValueUnit model
    'tag',
    'blood_pressure',
    ...biomarkerSpecialIdsWithParameters
];

export const specialBiomarkerTables = {        // without 'tag','blood_pressure',
    sleep_episode: sleepParameters,
    medication_prescription: medicationParameters,
    supplementation: supplementationParameters,
    nutrition: nutritionParametersAll,
    //blood_pressure: bloodPressureParameters, // not used here, so value_sets can be created
};

// These tables are used for displaying all biomarkers at "All biomarkers" - page:
export const secondLevelBiomarkerTables = {
    sleep_episode: sleepParameters,
    nutrition: nutritionParametersAll,
    // blood_pressure: bloodPressureParameters, // listed also in first level
    // medication_prescription: rxNormCodesMapped, // TODO: instead of listing, a link to RXNORM with search feature
    // bloodMetabolitesLipids: bloodMetabolitesLipidsCodes, // listed separately
    // bloodPlasmaProteins: bloodPlasmaProteinCodes,        // listed separately
    // loincCodes: loincUniLabOrderCodesMapped              // listed separately
};

// These tables are used for displaying lab biomarkers at "All biomarkers" - page:
export const labBiomarkerTables = {
    "Blood Metabolite Lipids": bloodMetabolitesLipidsCodes,
    "Blood Plasma Proteins": bloodPlasmaProteinCodes,
    "Loinc Codes": loincUniLabOrderCodesMapped
};

export const biomarkerCategories: ContentTable[] = [
    { id: '', name: '' },
    // { id: 'favorites', name: 'Favorites' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'sleep', name: 'Sleep' },                 // Sleep episode
    { id: 'activity', name: 'Physical activity' },
    { id: 'vital', name: 'Vital' },
    { id: 'biometric', name: 'Biometric' },
    { id: 'functional', name: 'Functional test' },
    // { id: 'genetic', name: 'Genetic' },
    // { id: 'epigenetic', name: 'Epigenetic' },
    // { id: 'metabolites', name: 'Metabolites' },
    // { id: 'microbiome', name: 'Microbiome' },
    { id: 'laboratory', name: 'Laboratory test' },  // blood, saliva, urine, feces test, Universal Laboratory Order Codes from LOINC
    // { id: 'diagnosis', name: 'Diagnosis' },         // disease, ICD-10
    { id: 'observation', name: 'Observation' },     // symptom or finding, state of mind and body, LOINC Core
    { id: 'reproduction', name: 'Reproductional health' },   // Sperm motility, ovular, vaginal fluid, menstruation, fertility
    // { id: 'cognitive', name: 'Cognitive' },
    { id: 'intervention', name: 'Intervention' },
    { id: 'environment', name: 'Environment' },
    { id: 'digital', name: 'Digital Biomarker' },
    { id: 'event', name: 'Life event' },
    { id: 'custom', name: 'Custom Items' },
];

export const biomarkerInputValueTypes: ContentTable[] = [
    { id: 'int', name: 'Integer' },
    { id: 'bool', name: 'Boolean' },
    { id: 'float', name: 'Float' },
    // { id: 'rating_5', name: 'Rating (1-5)' },
    // { id: 'rating_10', name: 'Rating (1-10)' },
    // { id: 'percentage', name: 'Percentage (%)' },
];

export const biomarkerDefault: Biomarker = {
    id: '',
    category: '',
    name_long: '',
    unit: ''
};

export const biomarkerRequiredImportFormat = ['category', 'id', 'loinc', 'type', 'subtype', 'classification', 'name_short', 'name_long', 'unit', 'value_type', 'default_value', 'description', 'references', 'aliases'];

// (Special-)Biomarkers with values to be rendered as Dates
export const biomarkersWithDateValues = ['sleep_bedtime_start', 'sleep_bedtime_end'];


export const biomarkerCustoms: Biomarker[] = [
    //// CUSTOM ////
    {
        id: 'custom_bool',
        category: 'custom',
        name_long: 'Custom Event',
        unit: '{bool}',
        value_type: 'bool'
    },
    {
        id: 'custom_rating_5',
        category: 'custom',
        name_long: 'Custom Rating (1-5)',
        unit: '{rating_5}',
        value_type: 'int'
    },
    {
        id: 'custom_rating_10',
        category: 'custom',
        name_long: 'Custom Rating (1-10)',
        unit: '{rating_10}',
        value_type: 'int'
    },
    {
        id: 'custom_int',
        category: 'custom',
        name_long: 'Custom Number',
        unit: '{count}',
        value_type: 'int'
    },
    {
        id: 'custom_float',
        category: 'custom',
        name_long: 'Custom Number with Decimals',
        unit: '{#}',
        value_type: 'float'
    },
    {
        id: 'custom_percentage',
        category: 'custom',
        name_long: 'Custom Percentage',
        unit: '%',
        value_type: 'int'
    }
];

export const biomarkerTag: BiomarkerExtended[] = [
    // Life events
    {
        id: 'tag',
        category: 'event',
        name_long: 'Tag',
        unit: 'tag',
        value_type: 'int',
        input_settings: {
            hideMethod: true,
            hideValue: true,
        },
        import_format_single: ['date', 'Tag [tag]']
    }
];



// TODO: 
// Location Information: GPS coordinates
// Air Quality Information & Pollutants: PM2.5 and PM10, SO2, CO, O3, NO2
// Weather: wind speed & direction, Pollen

export const biomarkerSettings: Record<string, BiomarkerExtended> = {
    // {
    //     id: '',
    //     category: '',
    //     name_long: '',
    //     unit: '',       // UCUM Code
    //     input_settings: {
    //         value_2: false,
    //         unit_2: '',
    //         time_interval: false,
    //         value_type: 'bool', // 'bool', 'int', 'float', 'rating_5', 'rating_10', 'percentage' // Rating 1-5
    //         default_value: 0,
    //         hideMethod: false, // if method field should be shown
    //         hideValue: false, // if value field should be shown
    //     }
    // },

    //// LABORATORY ////
    blood_analysis: {
        id: 'blood_analysis',
        category: 'laboratory',
        name_long: 'Blood Analysis',
        unit: '',
        value_type: 'int',
        import_format_single: ['timestamp', 'LOINC Code 1 [UCUM Unit]', 'LOINC Code 2 [UCUM Unit]', 'LOINC Code 3 [UCUM Unit]', ' ... ']
    },
    urine_analysis: {
        id: 'urine_analysis',
        category: 'laboratory',
        name_long: 'Urine Analysis',
        unit: '',
        value_type: 'int',
        import_format_single: ['timestamp', 'LOINC Code 1 [UCUM Unit]', 'LOINC Code 2 [UCUM Unit]', 'LOINC Code 3 [UCUM Unit]', ' ... ']
    },
    saliva_analysis: {
        id: 'saliva_analysis',
        category: 'laboratory',
        name_long: 'Saliva Analysis',
        unit: '',
        value_type: 'int',
        import_format_single: ['timestamp', 'LOINC Code 1 [UCUM Unit]', 'LOINC Code 2 [UCUM Unit]', 'LOINC Code 3 [UCUM Unit]', ' ... ']
    },
    stool_analysis: {
        id: 'stool_analysis',
        category: 'laboratory',
        name_long: 'Stool Analysis',
        unit: '',
        value_type: 'int',
        import_format_single: ['timestamp', 'LOINC Code 1 [UCUM Unit]', 'LOINC Code 2 [UCUM Unit]', 'LOINC Code 3 [UCUM Unit]', ' ... ']
    },
    //// VITAL ////
    blood_pressure: {
        id: 'blood_pressure',
        category: 'vital',
        name_long: 'Blood Pressure',
        unit: 'mm[Hg]',
        value_type: 'int',
        input_settings: {
            value_2: true,
            unit_2: 'mm[Hg]',
        },
        import_format_single: ['timestamp', 'Systolic Blood Pressure [mm[Hg]]', 'Diastolic Blood Pressure [mm[Hg]]']
    },

    /// INTERVENTION ////
    medication_prescription: {
        id: 'medication_prescription',
        category: 'intervention',
        name_long: 'Medication',
        unit: '',
        value_type: 'int',
        input_settings: {
            hideMethod: true,
            description: true,
            route: true,
            prescription_trigger: true,
            schedule: true,
            generic_name: true,
            trade_name: true,
            strength_unit: true,
            rxnorm_code: true,
        }
    },
    supplementation: {
        id: 'supplementation',
        category: 'intervention',
        name_long: 'Supplementation',
        unit: '',
        value_type: 'int',
        input_settings: {
            hideMethod: true,
            description: true,
            schedule: true,
            generic_name: true,
            strength_unit: true,
        }
    },
    //// NUTRITION ////
    nutrition: {
        id: 'nutrition',
        category: 'nutrition',
        name_long: 'Meal',
        unit: '',
        value_type: 'int',
        input_settings: {
            hideMethod: true,
            hideValue: true,
        },
        import_format_single: ['date', ...nutritionParametersAll.map(s => `${s.id} [${s.unit}]`)],
    },
    /// SLEEP ////
    sleep_episode: {
        id: 'sleep_episode',
        category: 'sleep',
        name_long: 'Sleep Episode',
        unit: '',
        value_type: 'int',
        input_settings: {
            time_interval: true,
            hideValue: true,
        },
        import_format_single: ['date', ...sleepParameters.map(s => `${s.id} [${s.unit}]`)],

    },
    // Life events
    tag: {
        id: 'tag',
        category: 'event',
        name_long: 'Tag',
        unit: '{TmStp}',
        value_type: 'int',
        input_settings: {
            hideMethod: true,
            hideValue: true,
        },
        import_format_single: ['date', 'Tag [tag]']
    },
};