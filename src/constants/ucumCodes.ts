import ucumCodesJson from 'src/constants/ucumCodesForElectronicMessaging-1.5.json';
import { ContentTable } from 'src/models/table.model';

// Search for UCUM Codes here: http://download.hl7.de/documents/ucum/ucumdata.html
// List from: https://ucum.org/trac/wiki/adoption/common

export interface UcumCodes {  // http://download.hl7.de/documents/ucum/ucumdata.html
    UCUM_CODE: string;
    UNIT_LONG_NAME: string;
  }

export const ucumCodesExtended: UcumCodes[] = [
    ...ucumCodesJson,
    {
        UCUM_CODE: "",
        UNIT_LONG_NAME: ""
    },
    {
        UCUM_CODE: "{string}",
        UNIT_LONG_NAME: "Text or other information"
    },
    {
        UCUM_CODE: "{bool}",
        UNIT_LONG_NAME: "Boolean"
    },
    {
        UCUM_CODE: "{rating_5}",
        UNIT_LONG_NAME: "Rating (1-5)"
    },
    {
        UCUM_CODE: "{rating_10}",
        UNIT_LONG_NAME: "Rating (1-10)"
    },
    {
        UCUM_CODE: "min/km",
        UNIT_LONG_NAME: "Minutes per kilometer"
    },
    {
        UCUM_CODE: "km/h",
        UNIT_LONG_NAME: "kilometer per hour"
    },
    {
        UCUM_CODE: "g/cm2",
        UNIT_LONG_NAME: "gram per square centimeter"
      },
    {
        UCUM_CODE: "[MET]",
        UNIT_LONG_NAME: "Metabolic equivalent"
    },
    {
        UCUM_CODE: "[MET].min",
        UNIT_LONG_NAME: "Total Metabolic equivalent minutes during activity minutes"
    },
    {
        UCUM_CODE: "{urine specific gravity}",
        UNIT_LONG_NAME: "Urine specific gravity"
    },
];

export const ucumCodesMapped: ContentTable[] = [
    ...(ucumCodesExtended || []).map(l => { return { id: l.UCUM_CODE, name: l.UNIT_LONG_NAME } }),

];

export const getUcumCode = {
    index: {
        ...Object.assign({}, {}, ...ucumCodesExtended.map(l => { return { [l.UCUM_CODE]: l } }))
    },
    get: function (ucumCode) {
        return this.index[ucumCode];
    }
};