import React from 'react';
import type { FC } from 'react';
import {
  LinearProgress,
  makeStyles
} from '@material-ui/core';
import { GridOverlay } from '@mui/x-data-grid';
import type { Theme } from 'src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: theme.spacing(3)
  }
}));

const CustomLoadingOverlay: FC = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <Box width={200} height="100%">
    //     <LinearProgress
    //       color="secondary"
    //     />
    //   </Box>
    // </div>
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress
          color="primary"
        />
      </div>
    </GridOverlay>
  );
};

export default CustomLoadingOverlay;
