import React, { useEffect } from 'react';
import type { FC } from 'react';
import {
  Container,
  Box,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import Header from './Header';
import ReferencesList from './ReferencesList';
import { BiomarkersState } from 'src/slices/biomarkers.slice';
import { useSelector } from 'src/store';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const ReferencesView: FC = () => {
  const classes = useStyles();
  const biomarkersData: BiomarkersState = useSelector((state) => state.biomarkers);

  return (
    <Page
      className={classes.root}
      title="Search References"
    >
      <Container maxWidth="lg">
        <Header />

        <Box mt={3}>
          <ReferencesList biomarkers={biomarkersData} />
        </Box>

      </Container>
    </Page>
  );
};

export default ReferencesView;
