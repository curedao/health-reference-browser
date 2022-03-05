import { SpecialParameter } from 'src/models/biomarker.model';

export const bloodLabCorp: SpecialParameter[] = [
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
    {
        id: '1920-8',
        name_long: 'AST (SGOT)',
        unit: 'IU/L',
        default_value: 0,
        aliases: ['Aspartate Aminotransferase (AST/SGOT)']
    },
    {
        id: '1742-6',
        name_long: 'ALT (SGPT)',
        unit: 'IU/L',
        default_value: 0,
        aliases: ['Alanine aminotransferase', 'Alanine aminotransferase (ALT/SGPT)']
    },
    {
        id: '88294-4',
        name_long: 'eGFR If NonAfricn Am',
        unit: 'mL/min/1.73',
        default_value: 0,
        aliases: ['eGFR calculation If NonAfricn Am', 'Glomerular filtration rate among non-blacks']
    },
    {
        id: '88293-6',
        name_long: 'eGFR If Africn Am',
        unit: 'mL/min/1.73',
        default_value: 0,
        aliases: ['eGFR calculation If Africn Am', 'Glomerular filtration rate among blacks']
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
        aliases: ['WBC Count']
    },
    {
        id: '789-8',
        name_long: 'RBC',
        unit: 'x10E6/uL',
        default_value: 0,
        aliases: ['RBC Count']
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
    {
        id: '787-2',
        name_long: 'MCV',
        unit: 'fL',
        default_value: 0,
        aliases: []
    },
    {
        id: '785-6',
        name_long: 'MCH',
        unit: 'pg',
        default_value: 0,
        aliases: []
    },
    {
        id: '786-4',
        name_long: 'MCHC',
        unit: 'g/dL',
        default_value: 0,
        aliases: []
    },
    {
        id: '788-0',
        name_long: 'RDW',
        unit: '%',
        default_value: 0,
        aliases: ['Erythrocyte distribution width']
    },
    {
        id: '777-3',
        name_long: 'Platelets',
        unit: 'x10E3/uL',
        default_value: 0,
        aliases: ['Platelet count', 'Platelet']
    },
    {
        id: '770-8',
        name_long: 'Neutrophils',
        unit: '%',
        default_value: 0,
        aliases: ['Neutrophils/100 leukocytes']
    },
    {
        id: '736-9',
        name_long: 'Lymphs',
        unit: '%',
        default_value: 0,
        aliases: ['Lymphs (%)', 'Lymphocytes/100 leukocytes', 'Lymphocytes']
    },
    {
        id: '5905-5',
        name_long: 'Monocytes',
        unit: '%',
        default_value: 0,
        aliases: ['Monocytes (%)', 'Monocytes/100 leukocytes']
    },
    {
        id: '713-8',
        name_long: 'Eos',
        unit: '%',
        default_value: 0,
        aliases: ['Eos (%)', 'Eosinophils/100 leukocytes', 'Eosinophils']
    },
    {
        id: '706-2',
        name_long: 'Basos',
        unit: '%',
        default_value: 0,
        aliases: ['Basos (%)', 'Basophils/100 leukocytes', 'Basophils']
    },
    {
        id: '751-8',
        name_long: 'Neutrophils (Absolute)',
        unit: 'x10E3/uL',
        default_value: 0,
        aliases: ['Neutrophils [#/volume]']
    },
    {
        id: '731-0',
        name_long: 'Lymphs (Absolute)',
        unit: 'x10E3/uL',
        default_value: 0,
        aliases: []
    },
    {
        id: '742-7',
        name_long: 'Monocytes (Absolute)',
        unit: 'x10E3/uL',
        default_value: 0,
        aliases: ['Monocytes(Absolute)']
    },
    {
        id: '711-2',
        name_long: 'Eos (Absolute)',
        unit: 'x10E3/uL',
        default_value: 0,
        aliases: ['Eosinophils (Absolute)']
    },
    {
        id: '704-7',
        name_long: 'Baso (Absolute)',
        unit: 'x10E3/uL',
        default_value: 0,
        aliases: ['Basophils (Absolute)']
    },
    {
        id: '71695-1',
        name_long: 'Immature Granulocytes',
        unit: '%',
        default_value: 0,
        aliases: ['Immature Granulocytes (%)']
    },
    {
        id: '53115-2',
        name_long: 'Immature Grans (Abs)',
        unit: 'x10E3/uL',
        default_value: 0,
        aliases: ['Immature granulocytes (Absolute)', 'Immature granulocytes (Ab)']
    },
    {
        id: '58413-6',
        name_long: 'NRBC',
        unit: '%',
        default_value: 0,
        aliases: ['NRBC (%)', 'Nucleated erythrocytes']
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
        aliases: ['Cholesterol in VLDL']
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
        aliases: ['Cholesterol/Non-HDL', 'Cholesterol/ Non-HDL', 'Cholesterol non HDL']
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
        aliases: ['Cholesterol.total/Cholesterol in HDL', 'Cholesterol total/ HDL Cholesterol Ratio']
    },
    {
        id: '56469-0',
        name_long: 'Estimated CHD Risk',
        unit: '{ratio}',
        default_value: 0,
        aliases: ['Cardiac heart disease risk', 'Estimated Cardiac heart disease risk']
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


    // C-Reactive Protein (CRP), High Sensitivity (Cardiac Risk Assessment)
    // https://www.labcorp.com/tests/120766/c-reactive-protein-crp-high-sensitivity-cardiac-risk-assessment
    {
        id: '30522-7',
        name_long: 'C-reactive Protein',
        unit: 'mg/L',
        default_value: 0,
        aliases: ['C reactive Protein', 'C-Reactive Protein, Cardiac', 'Cardiac C-Reactive Protein (CRP)', 'Cardiac C-Reactive Protein', 'High-sensitivity CRP']
    },

        // Rapamycin washout - Sirolimus (Rapamune), Blood
    {
        id: '29247-4',
        name_long: 'Sirolimus (Rapamune), Blood',
        unit: 'ng/mL',
        default_value: 0,
        aliases: ['Sirolimus (Rapamune)', 'Sirolimus, Blood']
    },
];

