import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
  TextField,
  SvgIcon,
  Divider,
  FormControlLabel,
  FormHelperText,
  Switch,
  makeStyles,
  IconButton
} from '@material-ui/core';
import {
  Plus as PlusIcon,
  Edit as EditIcon
} from 'react-feather';
import type { Theme } from 'src/theme';
import { Autocomplete } from '@material-ui/lab';
import { useSelector } from 'src/store';
import { Biomarker, BiomarkerInputValues } from 'src/models/biomarker.model';
import LoadingButton from 'src/components/LoadingButton';
import { appRoutes } from 'src/route-paths';
import NotAvailableView from 'src/views/errors/NotAvailableView';
import { createBiomarkersService } from 'src/services/biomarker.service';
import { biomarkerCategories, biomarkerInputValueTypes } from 'src/constants/biomarkerTables';
import { ucumCodesMapped } from 'src/constants/ucumCodes';
import Label from 'src/components/Label';
import { BiomarkersState } from 'src/slices/biomarkers.slice';
import BiomarkerLookupTables from './BiomarkerLookupTables';
import { businessLogic } from 'src/config';

interface BiomarkerCreateFormProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  favAvatar: {
    backgroundColor: theme.palette.warning.main
  },
  editAvatar: {
    backgroundColor: theme.palette.secondary.main
  },
  addTab: {
    marginLeft: theme.spacing(2)
  },
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  tagLabel: {
    whiteSpace: "normal",
    wordBreak: "break-all"
  }
}));

const BiomarkerCreateForm: FC<BiomarkerCreateFormProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const history = useHistory();
  const isMountedRef = useIsMountedRef();
  const [afterRender, setAfterRender] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams<any>(); // id: Used as flag for edit Chart
  const biomarkersData = useSelector<BiomarkersState>((state) => state.biomarkers);
  const [biomarker, setBiomarker] = useState<Biomarker>();
  const [references, setReferences] = useState<string>('');
  const [showAliases, setShowAliases] = useState<boolean>(true);
  const [aliases, setAliases] = useState<string>('');

  useEffect(() => {
    // id is string or undefined, is called when mounted and when healthData is loaded
    if (id && isMountedRef.current && biomarkersData.byId[id]) {
      setBiomarker(biomarkersData.byId[id]);
    }
  }, [id, biomarkersData, isMountedRef]);

  useEffect(() => {
    setAfterRender(true);
  });

  // If edit id is not in state
  if (afterRender && id && biomarkersData?.allIds?.length && !biomarkersData.byId[id]) {
    return (
      <NotAvailableView
        title="This Reference entry is not available. Is the URL correct?"
        button_text="Back to References"
        button_route={appRoutes.searchReferences}
      />);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        id: biomarker?.id ? biomarker.id : '',
        aliases: biomarker?.aliases?.length ? biomarker?.aliases : [],
        category: biomarker?.category ? (biomarkerCategories.find(c => c.id === biomarker.category) || biomarkerCategories[0]) : biomarkerCategories[0],
        type: biomarker?.type || '',
        subtype: biomarker?.subtype || '',
        name_short: biomarker?.name_short || '',
        name_long: biomarker?.name_long || '',
        unit: biomarker?.unit ? (ucumCodesMapped.find(c => c.id === biomarker.unit) || { id: '', name: '' }) : { id: '', name: '' },
        value_type: biomarker?.value_type ? biomarkerInputValueTypes.find(v => v.id === biomarker.value_type) : biomarkerInputValueTypes[0],
        description: biomarker?.description || '',
        references: biomarker?.references?.length ? biomarker?.references : [],
        saveAsNew: false,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        id: Yup.string().required('Id is required'),
        aliases: Yup.array(),
        category: Yup.object({
          id: Yup.string().required('Category is required'),
          name: Yup.string().required('Category is required'),
        }),
        type: Yup.string(),
        subtype: Yup.string(),
        name_short: Yup.string().max(255),
        name_long: Yup.string().max(255).required('Name is required'),
        unit: Yup.object({
          id: Yup.string().required('Unit is required'),
          name: Yup.string().required('Unit is required'),
        }),
        value_type: Yup.string().required('Value type is required'),
        description: Yup.string().max(5000),
        references: Yup.array(),
        saveAsNew: Yup.bool(),
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          const saveAsNew = values.saveAsNew;

          if (!id && !saveAsNew && biomarkersData.byId[values.id]) {
            throw new Error('Reference with ID exists already');
          };

          let biomarkerData: Biomarker = {
            id: values.id.trim(),
            ...(values?.aliases?.length ? { aliases: values.aliases } : {}),
            category: values.category?.id || biomarkerCategories[0].id,
            ...(values?.type ? { type: values.type } : {}),
            ...(values?.subtype ? { subtype: values.subtype } : {}),
            ...(values?.name_short ? { name_short: values.name_short } : {}),
            name_long: values.name_long,
            unit: values.unit.id,
            value_type: values.value_type.id as BiomarkerInputValues,
            description: values.description,
            references: values.references,
          };

          const createBiomarker = await createBiomarkersService({ [values.id]: biomarkerData })
            .then(res => res)
            .catch(err => { throw new Error(err); });

          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          // enqueueSnackbar('Biomarker saved', {
          //   variant: 'success'
          // });
          enqueueSnackbar(`This Feature is in development. Please contact ${businessLogic.support_email}`, {
            variant: 'warning'
          });

        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
          enqueueSnackbar(`Oh, an Error: ${err}`, {
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
        <form>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              lg={8}
            >
              <Card
                className={clsx(classes.root, className)}
                {...rest}
              >
                <CardHeader
                  title={id ? 'Edit' : 'Create'}
                  avatar={
                    <Avatar className={classes.editAvatar}>
                      <SvgIcon>
                        <EditIcon />
                      </SvgIcon>
                    </Avatar>
                  }
                />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <Box>
                        <TextField
                          error={Boolean(touched.id && errors.id)}
                          fullWidth
                          helperText={touched.id && errors.id}
                          label="ID"
                          name="id"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.id}
                          variant="outlined"
                          disabled={!!id && !values.saveAsNew}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <Box>
                        <Autocomplete
                          getOptionLabel={(option) => option.name}
                          getOptionSelected={(option, value,) => value.id === option.id}
                          options={biomarkerCategories}
                          value={values.category}
                          onChange={(event, newValue) => {
                            setFieldValue("category", newValue)
                          }}
                          renderInput={(params) => (
                            <TextField
                              error={Boolean(touched.category && errors.category)}
                              fullWidth
                              label="Category"
                              name="category"
                              variant="outlined"
                              {...params}
                            />
                          )}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <Box>
                        <TextField
                          error={Boolean(touched.type && errors.type)}
                          fullWidth
                          helperText={touched.type && errors.type}
                          label="Type"
                          name="type"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.type}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <Box>
                        <TextField
                          error={Boolean(touched.subtype && errors.subtype)}
                          fullWidth
                          helperText={touched.subtype && errors.subtype}
                          label="Subtype"
                          name="subtype"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.subtype}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={12}
                      xs={12}
                    >
                      <Box>
                        <TextField
                          error={Boolean(touched.name_long && errors.name_long)}
                          fullWidth
                          helperText={touched.name_long && errors.name_long}
                          label="Name"
                          name="name_long"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.name_long}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={12}
                      xs={12}
                    >
                      <Box>
                        <TextField
                          error={Boolean(touched.description && errors.description)}
                          fullWidth
                          multiline
                          rows={6}
                          helperText={touched.description && errors.description}
                          label="Description"
                          name="description"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.description}
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={8}
                      xs={12}
                    >
                      <Box>
                        <Autocomplete
                          getOptionLabel={(option) => option.name}
                          getOptionSelected={(option, value,) => value.id === option.id}
                          options={ucumCodesMapped}
                          value={values.unit}
                          onChange={(event, newValue) => {
                            setFieldValue("unit", newValue)
                          }}
                          //filterOptions={autocompleteFilterOptions}
                          renderInput={(params) => (
                            <TextField
                              error={Boolean(touched.unit && errors.unit)}
                              fullWidth
                              label="Unit (UCUM)"
                              name="unit"
                              variant="outlined"
                              {...params}
                            />
                          )}
                          renderOption={(option) => (
                            <React.Fragment>
                              <Box component="span" mr={2} style={{ width: 100 }}>
                                <Label color={'primary'}>
                                  {option?.id || '-'}
                                </Label>
                              </Box>
                              <Typography align="left">
                                {option.name}
                              </Typography>
                            </React.Fragment>
                          )}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <Box>
                        <Autocomplete
                          getOptionLabel={(option) => option.name}
                          getOptionSelected={(option, value,) => value.id === option.id}
                          options={biomarkerInputValueTypes}
                          value={values.value_type}
                          onChange={(event, newValue) => {
                            setFieldValue("value_type", newValue)
                          }}
                          renderInput={(params) => (
                            <TextField
                              error={Boolean(touched.value_type && errors.value_type)}
                              fullWidth
                              label="Value type"
                              name="value_type"
                              variant="outlined"
                              {...params}
                            />
                          )}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={12}
                      xs={12}
                    >
                      <Box
                        mt={1}
                        display="flex"
                        alignItems="center"
                      >
                        <TextField
                          fullWidth
                          label="References"
                          name="tag"
                          value={references}
                          onChange={(event) => setReferences(event.target.value)}
                          variant="outlined"
                          onKeyDown={(e) => {
                            if (!references || e.key !== 'Enter') {
                              return;
                            };
                            setFieldValue('references', [...values.references, references]);
                            setReferences('');
                          }}
                        />
                        <IconButton
                          className={classes.addTab}
                          onClick={() => {
                            if (!references) {
                              return;
                            };
                            setFieldValue('references', [...values.references, references]);
                            setReferences('');
                          }}
                        >
                          <SvgIcon>
                            <PlusIcon />
                          </SvgIcon>
                        </IconButton>
                      </Box>
                      <Box mt={2}>
                        {values.references.map((tag, i) => (
                          <Box mb={2}
                            key={i}
                            display="flex"
                          >
                            <Chip
                              variant="outlined"
                              label={tag}
                              className={classes.tag}
                              onDelete={() => {
                                const newTags = values.references.filter((t) => t !== tag);
                                setFieldValue('references', newTags);
                              }}
                              //icon={<LinkIcon />}
                              size="small"
                              classes={{
                                label: classes.tagLabel
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                      {Boolean(touched.references && errors.references) && (
                        <Box mt={2}>
                          <FormHelperText error>
                            {errors.references}
                          </FormHelperText>
                        </Box>
                      )}
                    </Grid>

                  </Grid>
                </CardContent>
                <Divider />
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <FormControlLabel
                        control={(
                          <Switch
                            checked={showAliases}
                            onChange={e => setShowAliases(e.target.checked)}
                          />
                        )}
                        label="Show Aliases"
                      />
                    </Grid>

                    {showAliases ?
                      <React.Fragment>
                        <Grid
                          item
                          md={12}
                          xs={12}
                        >
                          <Box
                            mt={1}
                            display="flex"
                            alignItems="center"
                          >
                            <TextField
                              fullWidth
                              label="Aliases"
                              name="aliases"
                              value={aliases}
                              onChange={(event) => setAliases(event.target.value)}
                              variant="outlined"
                              onKeyDown={(e) => {
                                if (!aliases || e.key !== 'Enter') {
                                  return;
                                };
                                setFieldValue('aliases', [...values.aliases, aliases]);
                                setAliases('');
                              }}
                            />
                            <IconButton
                              className={classes.addTab}
                              onClick={() => {
                                if (!aliases) {
                                  return;
                                };
                                setFieldValue('aliases', [...values.aliases, aliases]);
                                setAliases('');
                              }}
                            >
                              <SvgIcon>
                                <PlusIcon />
                              </SvgIcon>
                            </IconButton>
                          </Box>
                          <Box mt={2}>
                            {values.aliases.map((alias, i) => (
                              <Box mb={2}
                                key={i}
                              >
                                <Chip
                                  variant="outlined"
                                  label={alias}
                                  className={classes.tag}
                                  onDelete={() => {
                                    const newAliases = values.aliases.filter((t) => t !== alias);
                                    setFieldValue('aliases', newAliases);
                                  }}
                                />
                              </Box>
                            ))}
                          </Box>
                          {Boolean(touched.aliases && errors.aliases) && (
                            <Box mt={2}>
                              <FormHelperText error>
                                {errors.aliases}
                              </FormHelperText>
                            </Box>
                          )}
                        </Grid>

                      </React.Fragment>
                      : null}

                  </Grid>

                </CardContent>
                <CardContent>

                  {/* {Boolean(touched.end && errors.end) && (
                    <Box mt={2}>
                      <FormHelperText error>
                        {errors.end}
                      </FormHelperText>
                    </Box>
                  )} */}

                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    {id ?
                      <LoadingButton
                        onClick={e => setFieldValue("saveAsNew", !values.saveAsNew)}
                        variant="contained"
                        type="button"
                        isSubmitting={isSubmitting && values.saveAsNew}
                        disabled={isSubmitting}
                      >
                        Save as new
                      </LoadingButton>
                      : null}
                    <Box flexGrow={1} />
                    <LoadingButton
                      color="secondary"
                      variant="contained"
                      type="button"
                      onClick={handleSubmit}
                      isSubmitting={isSubmitting && !values.saveAsNew}
                      disabled={isSubmitting}
                    >
                      Save
                    </LoadingButton>
                  </Box>

                </CardContent>
              </Card>

            </Grid>
          </Grid>

          <BiomarkerLookupTables />

        </form>
      )
      }
    </Formik >

  );
};

BiomarkerCreateForm.propTypes = {
  className: PropTypes.string
};

export default BiomarkerCreateForm;
