import { SpecialParameter } from "src/models/biomarker.model";
import { LabPanelMap } from "src/models/lab-panel.model";
import { bloodPlasmaProteinCodes } from "../biomarkers/bloodPlasmaProteinCodes";
import { bloodLifeExtensionPanel } from "./bloodLifeExtensionPanel";
import { bloodLabCorp } from "./bloodLabCorp";
import { bloodStandardPanel } from "./bloodStandardPanel";
import { prodromeScanPanel } from "./prodromeScanPanel";
import { urineAnalysisTestStripPanel } from "./urineAnalysisTestStripPanel";


export const labTestPanelEmpty: SpecialParameter[] = [
    {
        id: '', 
        name_long: '',
        unit: '',
        default_value: 0
    }
];

// Panels
// Panel id's used as assay_id in measurement.header
export const labPanelsMap: LabPanelMap = {
    urine_analysis: [
        {
            id: 'urine_test_strip',
            name: 'Urine Test Strip',
            entries: urineAnalysisTestStripPanel,
            description: "A urine test strip or dipstick is a basic diagnostic tool used to determine pathological changes in a patient's urine in standard urinalysis.",
            references: ['https://en.wikipedia.org/wiki/Urine_test_strip']
        }
    ],
    blood_analysis: [
        {
            id: 'blood_standard_panel',
            name: 'Blood Standard Panel',
            entries: bloodStandardPanel,
            description: "A blood test is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle, or via fingerprick.",
            references: ['https://en.wikipedia.org/wiki/Blood_test']
        },
        {
            id: 'blood_prodrome_scan',
            name: 'Prodrome Scan',
            entries: prodromeScanPanel,
            description: "A blood test is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle, or via fingerprick.",
            references: ['https://en.wikipedia.org/wiki/Blood_test']
        },
        {
            id: 'blood_maccoss_wellness',
            name: 'MacCoss Wellness Assay',
            entries: bloodPlasmaProteinCodes,
            description: "A blood test is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle, or via fingerprick.",
            references: ['https://en.wikipedia.org/wiki/Blood_test']
        },
        {
            id: 'blood_life_exstension_basic',
            name: 'Life Extension',
            entries: bloodLifeExtensionPanel,
            description: "The Basic panel is a laboratory analysis of a blood sample performed by Life Extension.",
            references: ['https://www.lifeextension.com/lab-testing']
        },
        {
            id: 'blood_labcorp_collection',
            name: 'LabCorp',
            entries: bloodLabCorp,
            description: "A collection of all panels from LabCorp.",
            references: ['https://www.labcorp.com/test-menu/search']
        },
    ],

}