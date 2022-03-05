import React, {
  useState,
  useEffect
} from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import Papa from 'papaparse';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useSelector } from 'src/store';
//
import FilesDropzone from 'src/components/FilesDropzone';
//
import { biomarkerDefault, biomarkerRequiredImportFormat } from 'src/constants/biomarkerTables'
import LoadingButton from 'src/components/LoadingButton';
import { ucumCodesMapped } from 'src/constants/ucumCodes';
import { importBiomarkerData } from 'src/constructors/import-biomarker-data.constructor';
import { BiomarkersState } from 'src/slices/biomarkers.slice';
import BiomarkerLookupTables from './BiomarkerLookupTables';

interface BiomarkerMultipleUploadFormProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {},
  tableCell: { // TODO: styles don't change
    // width: 200,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderLeftColor: 'white',
    // borderRightColor: 'white',
    height: '100%'
  }
}));

const BiomarkerMultipleUploadForm: FC<BiomarkerMultipleUploadFormProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [files, setFiles] = useState<File[]>([]);
  const [preview, setPreview] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<any>();
  const biomarkersData = useSelector<BiomarkersState>((state) => state.biomarkers);

  const requiredFormat: string[] = biomarkerRequiredImportFormat;

  useEffect(() => {
    // Preview Parse local CSV file when added
    if (files && files?.length > 0) {
      const parsedCSV = Papa.parse(files[0], {
        header: false,
        dynamicTyping: false,
        skipEmptyLines: 'greedy',
        preview: 6,
        complete: function (results) {
          setPreview(results.data);
          console.log('[Import health data Preview] Finished: ', results.data);
        },
        error: function (error, errorFile) {
          setErrorMsg(error);
          console.log('[Import health data Preview] Error: ', error, errorFile);
        }
      });
    } else {
      setPreview(undefined);
    }
  }, [files]);

  return (
    <Formik
      initialValues={{
        biomarker_id: biomarkerDefault,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        biomarker_id: Yup.object(),
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {

          const importedBiomarkerData = await importBiomarkerData({ values, files, biomarkers: biomarkersData })
            .then(res => res)
            .catch(err => { throw new Error(err); });

          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Import successful', {
            variant: 'success'
          });

          setFiles([]);
          resetForm();
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
          enqueueSnackbar(`Import Error: ${err}`, {
            variant: 'error'
          });
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values
      }) => (
        <form
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              lg={8}
            >
              <Card>
                <CardHeader title="Required Format" />
                <Divider />
                <CardContent>
                  <PerfectScrollbar>
                    <Box mb={2}>

                      <Table size="small">
                        <TableBody>
                          <TableRow hover>
                            {requiredFormat?.length ? requiredFormat.map((format, index) => {
                              return (
                                <TableCell padding="none" key={index} classes={{ root: classes.tableCell }}>
                                  <Box width={160}>
                                    <Paper variant="outlined">
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                        align='center'
                                      >
                                        {format || ' - '}
                                      </Typography>
                                    </Paper>
                                  </Box>
                                </TableCell>
                              );
                            }) : null}
                          </TableRow>
                          <TableRow hover>
                            {requiredFormat?.length ? requiredFormat.map((format, index) => {
                              return (
                                <TableCell padding="none" key={index} classes={{ root: classes.tableCell }}>
                                  <Box width={160}>
                                    <Paper variant="outlined">
                                      <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                        align='center'
                                      >
                                        {' ... '}
                                      </Typography>
                                    </Paper>
                                  </Box>
                                </TableCell>
                              );
                            }) : null}
                          </TableRow>
                        </TableBody>
                      </Table>

                    </Box>
                  </PerfectScrollbar>

                  <Box mt={3}>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                    >
                      {'Required fields are: category, id, name_long, unit, value_type'}
                    </Typography>
                  </Box>

                </CardContent>
              </Card>

              <Box mt={3}>
                <Card>
                  <CardHeader title="Upload CSV file" />
                  <Divider />
                  <CardContent>
                    <FilesDropzone
                      files={files}
                      setFiles={setFiles}
                    />
                  </CardContent>
                </Card>
              </Box>
              <Box mt={3}>
                <Card>
                  <CardHeader title="Preview" />
                  <Divider />
                  <CardContent>

                    {errorMsg && (
                      <Box mt={3}>
                        <FormHelperText error>
                          {errorMsg}
                        </FormHelperText>
                      </Box>
                    )}

                    <PerfectScrollbar>
                      <Box mb={2}>
                        {!preview ?
                          <FormHelperText>
                            {' - select a file to see a preview here - '}
                          </FormHelperText>
                          : null}

                        <Table size="small">
                          <TableBody>
                            {preview ? [...preview, [...preview[0].map(p => ' ... ')]].map((row, i) => {

                              return (
                                <TableRow hover key={i}>

                                  {row.map((property, index) => {
                                    return (
                                      <TableCell
                                        padding="none"
                                        key={index}
                                      //classes={{ root: classes.tableCell }}
                                      >
                                        <Box width={160}>
                                          <Paper
                                            variant="outlined"
                                          //classes={{ root: classes.tableCell }}
                                          >
                                            <Typography
                                              variant="subtitle2"
                                              color="textPrimary"
                                              align='center'
                                            >
                                              {property || ' - '}
                                            </Typography>
                                          </Paper>
                                        </Box>
                                      </TableCell>
                                    )
                                  }
                                  )}

                                </TableRow>
                              );
                            }) : null}
                          </TableBody>
                        </Table>


                      </Box>
                    </PerfectScrollbar>
                  </CardContent>

                  {preview ?
                    <React.Fragment>
                      <Divider />
                      <CardContent>
                        <Box mt={3}>
                          <Typography
                            variant="caption"
                            color="textPrimary"
                          >
                            {'Please import data in the required format to avoid an error when importing.'}
                          </Typography>
                        </Box>
                      </CardContent>
                    </React.Fragment>
                    : null}

                  <Divider />
                  {
                    errors.submit && (
                      <Box mt={3} ml={2}>
                        <FormHelperText error>
                          {errors.submit}
                        </FormHelperText>
                      </Box>
                    )
                  }
                  <Box
                    p={2}
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <LoadingButton
                      color="secondary"
                      variant="contained"
                      type="button"
                      onClick={handleSubmit}
                      isSubmitting={isSubmitting}
                    //disabled={disabled}
                    >
                      Import
                    </LoadingButton>
                  </Box>

                </Card>
              </Box>
            </Grid>
          </Grid>

          <BiomarkerLookupTables />

        </form >
      )}
    </Formik >
  );
};

BiomarkerMultipleUploadForm.propTypes = {
  className: PropTypes.string
};

export default BiomarkerMultipleUploadForm;
