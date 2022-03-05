import { SpecialParameter } from "src/models/biomarker.model";

export const bloodStandardPanel: SpecialParameter[] = [
    // Metabolic Panel (14), Comprehensive
    // https://www.labcorp.com/tests/322000/metabolic-panel-14-comprehensive
    {
        id: '2345-7',
        name_long: 'Glucose',
        unit: 'mg/dL',
        default_value: 100,
        aliases: ['Glucose, Serum']
    },
    {
        id: '2160-0',
        name_long: 'Creatinine',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Creatinin', 'Creatinine, Serum']
    },
    {
        id: '3094-0',
        name_long: 'Urea nitrogen (BUN)',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['BUN', 'Urea nitrogen', 'Urea nitrogen, Serum', 'Blood Urea Nitrogen']
    },
    {
        id: '3097-3',
        name_long: 'BUN/Creatinine Ratio',
        unit: '{ratio}',
        default_value: 0,
        aliases: ['BUN:Creatinine Ratio', 'Urea nitrogen/Creatinine Ratio']
    },
    {
        id: '2951-2',
        name_long: 'Sodium',
        unit: 'mmol/L',
        default_value: 0,
        aliases: ['Sodium, Serum']
    },
    {
        id: '2823-3',
        name_long: 'Potassium',
        unit: 'mmol/L',
        default_value: 0,
        aliases: ['Potassium, Serum']
    },
    {
        id: '2075-0',
        name_long: 'Chloride',
        unit: 'mmol/L',
        default_value: 0,
        aliases: ['Chloride, Serum']
    },
    {
        id: '2028-9',
        name_long: 'Carbon Dioxide, Total',
        unit: 'mmol/L',
        default_value: 0,
        aliases: ['Total Carbon Dioxide']
    },
    {
        id: '17861-6',
        name_long: 'Calcium',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Calcium, Serum']
    },
    {
        id: '19123-9',
        name_long: 'Magnesium',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Magnesium, Serum']
    },
    {
        id: '2885-2',
        name_long: 'Protein, Total',
        unit: 'g/dL',
        default_value: 0,
        aliases: ['Protein, Total, Serum']
    },
    {
        id: '1751-7',
        name_long: 'Albumin',
        unit: 'g/dL',
        default_value: 0,
        aliases: ['Albumin, Serum']
    },
    {
        id: '10834-0',
        name_long: 'Globulin, Total',
        unit: 'g/dL',
        default_value: 0,
        aliases: ['Globulin']
    },
    {
        id: '1759-0',
        name_long: 'A/G Ratio',
        unit: '{ratio}',
        default_value: 0,
        aliases: ['Albumin:Globulin (A:G) ratio']
    },
    {
        id: '1975-2',
        name_long: 'Bilirubin, Total',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Bilirubin']
    },
    {
        id: '6768-6',
        name_long: 'Alkaline Phosphatase',
        unit: 'IU/L',
        default_value: 0,
        aliases: ['Alkaline phosphatase, Serum']
    },
    // Uric Acid
    // https://www.labcorp.com/tests/001057/uric-acid
    {
        id: '3084-1',
        name_long: 'Uric Acid',
        unit: 'mg/dL',
        default_value: 100,
        aliases: ['UricAcid', 'Uric Acid, Serum']
    },
    // Complete Blood Count (CBC) With Differential
    // https://www.labcorp.com/tests/005009/complete-blood-count-cbc-with-differential
    {
        id: '6690-2',
        name_long: 'WBC',
        unit: 'x10E3/uL',
        default_value: 0,
        aliases: []
    },
    {
        id: '789-8',
        name_long: 'RBC',
        unit: 'x10E6/uL',
        default_value: 0,
        aliases: []
    },
    {
        id: '718-7',
        name_long: 'Hemoglobin',
        unit: 'g/dL',
        default_value: 0,
        aliases: []
    },
    {
        id: '4544-3',
        name_long: 'Hematocrit',
        unit: '%',
        default_value: 0,
        aliases: []
    },
    // Iron
    // https://www.labcorp.com/tests/001339/iron
    {
        id: '2498-4',
        name_long: 'Iron',
        unit: 'ug/dL',
        default_value: 0,
        aliases: []
    },
    // Lipid profile 
    // https://www.labcorp.com/tests/343925/lipid-profile-with-non-hdl-cholesterol
    {
        id: '2093-3',
        name_long: 'Cholesterol, Total',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Cholesterol tot', 'Cholesterol total']
    },
    {
        id: '2085-9',
        name_long: 'HDL Cholesterol',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Cholesterol/HDL', 'Cholesterol/ HDL', 'Cholesterol in HDL']
    },
    {
        id: '13458-5',
        name_long: 'VLDL Cholesterol Cal',
        unit: 'mg/dL',
        default_value: 0,
        aliases: []
    },
    {
        id: '13457-7',
        name_long: 'LDL Cholesterol',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Cholesterol/LDL', 'Cholesterol/ LDL', 'Cholesterol in LDL', 'LDL Chol Calc (NIH)']
    },
    {
        id: '43396-1',
        name_long: 'Non-HDL Cholesterol',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Cholesterol/Non-HDL', 'Cholesterol/ Non-HDL']
    },
    {
        id: '2571-8',
        name_long: 'Triglycerides',
        unit: 'mg/dL',
        default_value: 0,
        aliases: ['Triglyceride']
    },
    {
        id: '9830-1',
        name_long: 'T. Chol/HDL Ratio',
        unit: '{ratio}',
        default_value: 0,
        aliases: ['Cholesterol.total/ Cholesterol in HDL', 'Cholesterol total/ HDL Cholesterol Ratio']
    },
        // Creatine Kinase (CK) and Lactate Dehydrogenase (LD), Totals and Isoenzymes
    // https://www.labcorp.com/tests/001859/creatine-kinase-ck-and-lactate-dehydrogenase-ld-totals-and-isoenzymes
    {
        id: '2157-6',
        name_long: 'Creatine Kinase,Total',
        unit: 'U/L',
        default_value: 0,
        aliases: ['Creatine Kinase']
    },
    {
        id: '2532-0',
        name_long: 'LDH',
        unit: 'IU/L',
        default_value: 0,
        aliases: ['LDH Isoenzymes', 'Lactate Dehydrogenase (LD)', 'LD Isoenzymes']
    },
    // Homocyst(e)ine
    // https://www.labcorp.com/tests/706994/homocyst-e-ine
    {
        id: '13965-9',
        name_long: 'Homocysteine',
        unit: 'umol/L',
        default_value: 0,
        aliases: ['Homo cysteine', 'Homocyst(e)ine', 'Homocystine', 'Homo cystine']
    },

    // C-Reactive Protein (CRP), High Sensitivity (Cardiac Risk Assessment)
    // https://www.labcorp.com/tests/120766/c-reactive-protein-crp-high-sensitivity-cardiac-risk-assessment
    {
        id: '30522-7',
        name_long: 'C-reactive Protein',
        unit: 'mg/L',
        default_value: 0,
        aliases: ['C reactive Protein', 'C-Reactive Protein, Cardiac', 'Cardiac C-Reactive Protein (CRP)', 'Cardiac C-Reactive Protein', 'High-sensitivity CRP']
    },

];

// Lipids, Glucose, Liver-Kidney Function

// Glucose
// Uric Acid
// BUN
// Creatinine
// eGFR
// BUN/Creatinine
// Sodium
// Potassium
// Chloride
// Calcium
// Magnesium
// Phosphorus
// Protein, Total
// Albumin
// Globulin
// A/G Ratio
// Bilirubin
// Alkaline Phosphatase
// LDH
// AST
// ALT
// GGT
// Iron
// Cholesterol, Total
// Triglycerides
// HDL Cholesterol
// LDL Cholesterol
// T. Chol/HDL Ratio
// Estimated CHD Risk



// Insulin Resistance Markers

// Insulin
// HbA1C
// Ferritin



// The Omega-3 Index Complete test measures the following:

// Omega-3 Index
// Trans Fat Index
// Omega-6:Omega-3 Ratio
// AA:EPA Ratio
// Full Fatty Acid Profile including:
//     Omega-3s
//     Omega-6s
//     Monounsaturated
//     Saturated
//     Trans



// Blood Counts

// WBC Count
// RBC Count
// Hemoglobin
// Hematocrit
// MCV
// MCH
// MCHC
// RDW
// Platelet count
// Monocytes (% and absolute)
// Eos (% and absolute)
// Basos (% and absolute)
// Neutrophils (% and absolute
// Lymphs (% and absolute)
// Immature granulocytes
// Immature cells



// Prostate Cancer Screening (Males Only)​

// PSA (Prostate-Specific Antigen)



// Cardiac/Inflammatory Markers

// NMR Lipoprofile (measures atherogenic lipid risks + inflammation markers)
// Homocysteine
// C-Reactive Protein (high sensitivity)
// Apolipoprotein B (measures atherogenic risk of non-HDL lipids)
// Omega Index — Comprehensive (this is a finger stick kit)



// Hormones and Binding Proteins

// IGF-1
// IGF1BP3
// DHEA-S
// Free Testosterone
// Total Testosterone
// Estradiol
// Progesterone
// Vitamin D 25-Hydroxy


// Thyroid Function​

// Free T3
// Free T4
// TSH (Thyroid Stimulating Hormone)