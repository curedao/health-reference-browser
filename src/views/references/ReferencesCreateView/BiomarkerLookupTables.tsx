import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { biomarkerCategories, biomarkerInputValueTypes } from 'src/constants/biomarkerTables';
import { ucumCodesMapped } from 'src/constants/ucumCodes';

interface HeaderProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const BiomarkerLookupTables: FC<HeaderProps> = ({ className, ...rest }) => {
  const classes = useStyles();

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
        lg={12}
      >
        <Box mt={4}>
          <Typography
            variant="h4"
            color="textPrimary"
            align='left'
          >
            {"Lookup tables"}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        lg={2}
      >
        <Typography
          variant="h5"
          color="textPrimary"
          align='left'
        >
          {"Categories:"}
        </Typography>
        <Box mt={2}>
          {biomarkerCategories.map((cat, i) => {
            if (!cat?.id) { return null; };
            return (
              <Box key={i}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  align='left'
                >
                  {cat.id || ' - '}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        lg={2}
      >
        <Typography
          variant="h5"
          color="textPrimary"
          align='left'
        >
          {"Value types:"}
        </Typography>
        <Box mt={2}>
          {biomarkerInputValueTypes.map((cat, i) => {
            if (!cat?.id) { return null; };
            return (
              <Box key={i}>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  align='left'
                >
                  {cat.id || ' - '}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        lg={8}
      >
        <Typography
          variant="h5"
          color="textPrimary"
          align='left'
        >
          {"UCUM Units:"}
        </Typography>
        <Box mt={2}>
          {ucumCodesMapped.map((cat, i) => {
            if (!cat?.id) { return null; };
            return (
              <Grid
                container
                spacing={3}
                key={i}
              >
                <Grid
                  item
                  xs={3}
                  lg={3}
                >
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    align='left'
                  >
                    {cat.id || ' - '}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={9}
                  lg={9}
                >
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    align='left'
                  >
                    {cat.name || ' - '}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

BiomarkerLookupTables.propTypes = {
  className: PropTypes.string
};

export default BiomarkerLookupTables;
