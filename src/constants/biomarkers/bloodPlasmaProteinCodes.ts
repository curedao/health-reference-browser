import bloodPlasmaProteinCodesJson from 'src/constants/biomarkers/bloodPlasmaProteinCodes-1.0.json';
import { SpecialParameter } from 'src/models/biomarker.model';

export const bloodPlasmaProteinCodes: SpecialParameter[] = [
    ...bloodPlasmaProteinCodesJson
    // {
    //     id: "",
    //     type: "protein",
    //     subtype: "plasma",
    //     classification: "",
    //     name_long: "",
    //     unit: "%",
    //     description: "",
    //     reference: ""
    //   }
];

export const getBloodPlasmaProtein = {
    index: {
        ...Object.assign({}, {}, ...bloodPlasmaProteinCodes.map(b => { return { [b.id]: b } }))
    },
    get: function (code) {
        return this.index[code];
    }
};