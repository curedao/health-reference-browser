import React, {
  useState,
  SyntheticEvent,
  Fragment
} from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowParams,
  GridSortModel,
  MuiEvent,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton
} from '@mui/x-data-grid';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Card,
  SvgIcon,
  makeStyles,
  Typography
} from '@material-ui/core';
import {
  Image as ImageIcon
} from 'react-feather';
import LoadingButton from 'src/components/LoadingButton';
import { Theme } from 'src/theme';
import { BiomarkersState } from 'src/slices/biomarkers.slice';
import CustomLoadingOverlay from 'src/components/CustomLoadingOverlay';
import { Biomarker } from 'src/models/biomarker.model';
import { businessLogic } from 'src/config';
import { createBiomarkersService } from 'src/services/biomarker.service';
import { appRoutes } from 'src/route-paths';
import { downloadJSONFile } from 'src/utils/downloadJSONFile';
import { nutritionParametersAll } from 'src/constants/nutritionTables';
import { biomarkerSettings } from 'src/constants/biomarkerTables';

interface BiomarkersListProps {
  className?: string;
  biomarkers: BiomarkersState;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
  },
  imageCell: {
    fontSize: 0,
    width: 68,
    flexBasis: 68,
    flexGrow: 0,
    flexShrink: 0
  },
  image: {
    height: 68,
    width: 68,
    objectFit: 'cover',
  },
  datagrid: {
    width: '100%',
    border: "none",
    boxShadow: 'none',
    '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      color: "secondary"
    },
  },
  placeholder: {
    height: 200
  }
}));

const ReferencesList: FC<BiomarkersListProps> = ({ className, biomarkers, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const exportFileName: string = `${businessLogic.default_source_name}_Biomarkers_Export_${new Date().toISOString()}`;
  const editBiomarkerLink = (id: string): string => `${appRoutes.searchEditReferences + id}`;

  const handleSaveBiomarkers = async () => {
    try {
      setIsSubmitting(true);
      let biomarkersObject = {};

      const saveBios = await createBiomarkersService(biomarkersObject)
        .then(res => res)
        .catch(err => { throw new Error(err); });

      enqueueSnackbar(`Biomarkers saved`, { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(`Error saving Biomarkers: ${error}`, { variant: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteBiomarker = (): void => {
    enqueueSnackbar('Really delete Biomarker?', {
      variant: 'warning',
      // consent
      action: (key) => (
        <Fragment>
          <Button onClick={async () => {
            try {
              closeSnackbar(key);
              setIsSubmitting(true);

              enqueueSnackbar('This Features is in development', { variant: 'warning' });
              //enqueueSnackbar('Deleted', { variant: 'success' });
            } catch (error) {
              enqueueSnackbar(`Error deleting: ${error}`, { variant: 'error' });
            } finally {
              setIsSubmitting(false);
            }
          }}>
            Delete
          </Button>
          <Button onClick={() => { closeSnackbar(key) }}>
            Cancel
          </Button>
        </Fragment>
      )
    });
  };

  const handleDownloadBiomarkersAsJSON = (): void => {
    // Download JSON file
    const exportName: string = `OpenCures_Biomarkers_Reference_Export_${new Date().toISOString()}`;
    const biomarkersArray: Biomarker[] = biomarkers?.allIds.map(bid => biomarkers?.byId[bid]);
    downloadJSONFile(exportName, biomarkersArray);

    // Temporary use to download coded tables like nutrition
    // downloadJSONFile(exportName + '_nutrition', nutritionParametersAll);

  };

  const rows: GridRowsProp = biomarkers?.allIds?.map((bid, index) => {
    const biomarker: Biomarker = biomarkers.byId[bid];
    let biomarkerFlat = { ...biomarker, ...(biomarkerSettings[biomarker?.id]?.input_settings ? biomarkerSettings[biomarker?.id].input_settings : {}) };
    return biomarkerFlat;
  });

  const cellText = (value: any) => {
    return (
      <Typography
        variant="body2"
        color="textPrimary"
      >
        {`${value || ''}`}
      </Typography>
    )
  };

  const cellImage = (url) => {
    return (url ? (
      <img
        alt="Biomarker"
        src={url || "#"}
        className={classes.image}
      />
    ) : (
      <Box
        p={2}
        bgcolor="background.dark"
      >
        <SvgIcon>
          <ImageIcon />
        </SvgIcon>
      </Box>
    )
    )
  };

  const handleRowClick = (params: GridRowParams, event: MuiEvent<SyntheticEvent<Element, Event>>, details?: any): void => {
    history.push(editBiomarkerLink(params?.row?.id))
  };

  const columns: GridColDef[] = [
    { field: 'category', headerName: 'Category', width: 135, renderCell: (params) => cellText(params.value) },
    { field: 'id', headerName: 'ID', width: 200, renderCell: (params) => cellText(params.value) },
    { field: 'type', headerName: 'Type', width: 200, renderCell: (params) => cellText(params.value), hide: true },
    { field: 'subtype', headerName: 'Subtype', width: 200, renderCell: (params) => cellText(params.value), hide: true },
    { field: 'classification', headerName: 'Classification', width: 200, renderCell: (params) => cellText(params.value), hide: true },
    { field: 'name_shot', headerName: 'Name (short)', width: 200, renderCell: (params) => cellText(params.value), hide: true },
    { field: 'name_long', headerName: 'Name', width: 250, renderCell: (params) => cellText(params.value) },
    { field: 'unit', headerName: 'Unit', width: 140, renderCell: (params) => cellText(params.value) },
    { field: 'value_type', headerName: 'Value type', width: 150, renderCell: (params) => cellText(params.value) },
    { field: 'default_value', headerName: 'Default value', width: 140, renderCell: (params) => cellText(params.value) },
    { field: 'description', headerName: 'Description', width: 600, renderCell: (params) => cellText(params.value) },
    { field: 'references', headerName: 'References', width: 600, renderCell: (params) => cellText(params.value) },
  ];

  const sortModel: GridSortModel = [
    {
      field: 'category',
      sort: 'asc',
    },
    {
      field: 'id',
      sort: 'asc',
    },
  ];

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
      >
        <Box
          flexGrow={1}
          p={1.5}
          mb={6}
        >
          <Card>
            <DataGrid
              autoHeight
              autoPageSize
              density="compact"
              checkboxSelection
              //loading
              rows={rows}
              columns={columns}
              sortModel={sortModel}
              onRowClick={handleRowClick}
              className={classes.datagrid}
              //scrollbarSize={10}
              //isRowSelectable=
              components={{
                Toolbar: () => (
                  <GridToolbarContainer >
                    <GridToolbarColumnsButton />
                    <GridToolbarFilterButton />
                    <GridToolbarExport csvOptions={{ fileName: exportFileName }} />
                  </GridToolbarContainer>
                ),
                //   NoRowsOverlay: () => (
                //     <Box
                //       display="flex"
                //       justifyContent="center"
                //       alignItems="center"
                //       className={classes.placeholder}
                //     >
                //       <Typography
                //         variant="body2"
                //         color="textSecondary"
                //         align="center"
                //       >
                //         {'No Rows'}
                //       </Typography>
                //     </Box>
                //   ),
                // Checkbox: () => (
                //   <Checkbox color="secondary" />
                // ),
                LoadingOverlay: CustomLoadingOverlay,
              }}
            />

            <Box
              display="flex"
              alignItems="center"
              p={2}
            >
              <Box flexGrow={1} />
              <LoadingButton
                color="secondary"
                variant="contained"
                onClick={handleDownloadBiomarkersAsJSON}
                isSubmitting={isSubmitting}
                disabled={isSubmitting}
              >
                Download as JSON
              </LoadingButton>
            </Box>

          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

ReferencesList.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  biomarkers: PropTypes.object
};

ReferencesList.defaultProps = {
};

export default ReferencesList;
