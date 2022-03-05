import React, { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';
import LoadingScreen from 'src/components/LoadingScreen';

interface MainLayoutProps {
  children?: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const classes = useStyles();
  const [afterRender, setAfterRender] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAfterRender(true);
    }, 5000);
  }, []);

  if (!afterRender) {
    return <LoadingScreen />;
  };

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
