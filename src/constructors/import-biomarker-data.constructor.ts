import Papa from 'papaparse';
import { biomarkerCategories, biomarkerInputValueTypes, biomarkerRequiredImportFormat } from 'src/constants/biomarkerTables';
import { ucumCodesMapped } from 'src/constants/ucumCodes';
//
import { Biomarker, BiomarkerInputValues } from 'src/models/biomarker.model';
import { createBiomarkersService } from 'src/services/biomarker.service';
import { BiomarkersState } from 'src/slices/biomarkers.slice';


interface ConstructImportBiomarkerDataProps {
    values: ConstructImportBiomarkerDataValues;
    files: File[];
    biomarkers: BiomarkersState;
}

export interface ConstructImportBiomarkerDataValues {
    biomarker_id?: Biomarker;
}


export const importBiomarkerData = async (constructOptions: ConstructImportBiomarkerDataProps) => {
    const { values, files, biomarkers } = constructOptions;

    return new Promise((resolve, reject) => {
        try {
            let errorMessages = [];

            // Validation of File input:
            if (!files || !files.length || !('File' in window && files[0] instanceof File)) {
                console.log('[Import biomarker data constructor] No File: ', files);
                throw new Error('No File');
            }

            if (!files[0].name.includes('.csv')) {
                console.log('[Import biomarker data constructor] No CSV-File');
                throw new Error(`No CSV File: Type: ${files[0].type}, File Name: ${files[0].name}`);
            }
            if (files.length > 1) {
                console.log('[Import biomarker data constructor] No File: ', files);
                throw new Error('Only 1 CSV file for now');
            }

            // TODO: parse multiple files

            const fileToParse: File = files[0];

            // Parse local CSV file
            const parsedCSV = Papa.parse(fileToParse, {
                header: false,
                dynamicTyping: true, // European-formatted numbers must have commas and dots swapped
                // worker: true, // Using a worker will keep your page reactive, but may be slightly slower.
                skipEmptyLines: 'greedy',
                // transform: undefined,        // A function to apply on each value.
                complete: async function (results: any) {
                    //console.log('[Import biomarker data constructor] Finished parsing: ', results);

                    try {
                        //// VALIDATION ////

                        // Validation of Header against global requirements:
                        const parsedDataHeader: any[] = results.data[0];

                        parsedDataHeader.map((headerField, index) => {
                            if (!biomarkerRequiredImportFormat.includes(headerField.trim().toLowerCase())) {
                                throw new Error(`Wrong header format in field number: ${index + 1}`);
                            };
                        });

                        // Validation of Data against global requirements:
                        const parsedData: any[][] = [...results.data];
                        parsedData.shift(); // Remove Header 

                        if (!parsedData || parsedData.length === 0 || parsedData[0].length < 2) {
                            throw new Error('No Data');
                        };
                        // TODO: more validation

                        //// SETUP ////

                        let constructedBiomarkers: Record<string, Biomarker> = {};

                        parsedData.map((row, index) => {
                            let importBiomarker: Biomarker = {
                                category: '',
                                id: '',
                                name_long: '',
                                unit: '',
                                value_type: 'int'
                            };
                            row.map((field, i) => {
                                const sanitizedField: string = field?.toString().trim();
                                const sanitizedHeaderField: string = parsedDataHeader[i].trim().toLowerCase();

                                /// VALIDATION of field values
                                // No Value
                                if (!sanitizedField && sanitizedField !== '0') {
                                    errorMessages.push(`No value in column: ${index + 1}, row: ${i + 1}`);
                                    return;
                                };

                                // Id not existing
                                if (sanitizedHeaderField === 'id' && biomarkers.byId[sanitizedField]) {
                                    throw new Error(`Biomarker Id existing already. Check row: ${index + 1}`);
                                };

                                // Category
                                if (sanitizedHeaderField === 'category' && !biomarkerCategories.find(bc => bc.id === sanitizedField)) {
                                    throw new Error(`Biomarker category wrong. Check row: ${index + 1}`);
                                };

                                // Ucum unit
                                if (sanitizedHeaderField === 'unit' && !ucumCodesMapped.find(un => un.id === sanitizedField)) {
                                    throw new Error(`Biomarker unit wrong. Check row: ${index + 1}`);
                                };

                                // Value type
                                if (sanitizedHeaderField === 'value_type' && !biomarkerInputValueTypes.find(vt => vt.id === sanitizedField)) {
                                    throw new Error(`Biomarker value type wrong. Check row: ${index + 1}`);
                                };

                                if (sanitizedHeaderField === 'value_type') {
                                    importBiomarker.value_type = sanitizedField as BiomarkerInputValues;
                                    return;
                                };
                                if (sanitizedHeaderField === 'references' || sanitizedHeaderField === 'aliases') {
                                    importBiomarker[sanitizedHeaderField] = [...(importBiomarker[sanitizedHeaderField] ? importBiomarker[sanitizedHeaderField] : []), sanitizedField];
                                    return;
                                };
                                // All other cases
                                importBiomarker[sanitizedHeaderField] = sanitizedField;


                            });

                            constructedBiomarkers[row[1]] = importBiomarker;
                        });

                        console.log('[Import biomarker data constructor] Constructed biomarker data to submit: ', parsedData, constructedBiomarkers);

                        // Submit data to service
                        const createdBiomarkerData = await createBiomarkersService(constructedBiomarkers)
                            .then(res => res)
                            .catch(err => { throw new Error(err); });

                        console.log('[Import biomarker data constructor] Finished: ', ...(errorMessages?.length ? errorMessages : ['- no errors - ']));
                        resolve(errorMessages);

                    } catch (error) {
                        reject(error);
                    }
                },
                error: function (error, errorFile) {
                    console.log('[Import biomarker data constructor] Error: ', error, errorFile);
                    reject(error);
                }
            });
        }
        catch (err) {
            console.error('[Import biomarker data constructor] Error: ', err);
            reject(err);
        }
    });
};