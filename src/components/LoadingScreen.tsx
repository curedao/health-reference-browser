import React from 'react';
import type { FC } from 'react';
import {
  Box,
  LinearProgress,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import { THEMES } from 'src/constants';
import "src/assets/css/loadingAnimation.css";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...theme.name === THEMES.DARK ? {
      backgroundImage: `radial-gradient(circle farthest-corner at center, #3C4B57 0%, ${theme.palette.background.dark} 100%)`,
    } : {},
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    //padding: theme.spacing(3)
  }
}));

const LoadingScreen: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Box width={200}>
        <LinearProgress
          color="secondary"
        />
      </Box> */}
      {/* <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}
      {/* <div className="lds-ripple"><div></div><div></div></div> */}
      {/* <div id="load"><div>O</div><div>P</div><div>E</div><div>N</div><div>C</div><div>U</div><div>R</div><div>E</div><div>S</div></div> */}
      <div className="loader"><div className="inner one"></div><div className="inner two"></div></div>
    </div>
  );
};

export default LoadingScreen;
