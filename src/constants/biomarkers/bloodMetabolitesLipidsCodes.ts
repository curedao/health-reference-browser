import bloodMetabolitesLipidsJson from 'src/constants/biomarkers/bloodMetabolitesLipids.json';
import { SpecialParameter } from 'src/models/biomarker.model';

export const bloodMetabolitesLipidsCodes: SpecialParameter[] = [
    ...bloodMetabolitesLipidsJson,
    {
        id: "ufa-sc",
        type: "metabolite",
        subtype: "lipid",
        classification: "ultra long chain fatty acid",
        name_long: "(SC-GTA) Short Chain GTAs",
        name_long_prodrome_scan: "(SC-GTA) Short Chain GTAs",
        unit: "%",
        description: "",
        reference: ""
      },
      {
        id: "ufa-lc",
        type: "metabolite",
        subtype: "lipid",
        classification: "ultra long chain fatty acid",
        name_long: "(LC-GTA) Long Chain GTAs",
        name_long_prodrome_scan: "(LC-GTA) Long Chain GTAs",
        unit: "%",
        description: "",
        reference: ""
      },
    {
        id: "elov5-t",
        type: "metabolite",
        subtype: "lipid",
        classification: "",
        name_long: "Overall ELOV5",
        name_long_prodrome_scan: "Overall ELOV5",
        unit: "%",
        description: "",
        reference: ""
      },

];

export const getBloodMetabolitesLipid = {
    index: {
        ...Object.assign({}, {}, ...bloodMetabolitesLipidsCodes.map(b => { return { [b.id]: b } }))
    },
    get: function (code) {
        return this.index[code];
    }
};