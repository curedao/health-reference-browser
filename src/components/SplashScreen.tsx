import React from 'react';
import type { FC } from 'react';
import {
  Box,
  LinearProgress,
  makeStyles
} from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import type { Theme } from 'src/theme';
import { THEMES } from 'src/constants';
import "src/assets/css/loadingAnimation.css";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //backgroundColor: theme.palette.background.default,
    //backgroundImage: `radial-gradient(circle farthest-corner at center, ${alpha(theme.palette.background.default, 0.95)} 0%, ${theme.palette.background.default} 100%)`,
    ...theme.name === THEMES.DARK ? {
      backgroundImage: `radial-gradient(circle farthest-corner at center, #3C4B57 0%, ${theme.palette.background.dark} 100%)`,
    } : {},
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    //padding: theme.spacing(3),
    position: 'fixed',
    top: 0,
    zIndex: 2000
  }
}));

const SlashScreen: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Box width={300}>
        <LinearProgress color="secondary"/>
      </Box> */}
      {/* <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}
      {/* <div className="lds-ripple"><div></div><div></div></div> */}
      {/* <div id="load"><div>O</div><div>P</div><div>E</div><div>N</div><div>C</div><div>U</div><div>R</div><div>E</div><div>S</div></div> */}
      <div className="loader"><div className="inner one"></div><div className="inner two"></div></div>

    </div>
  );
}

export default SlashScreen;
