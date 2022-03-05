import React, {
  forwardRef,
  useEffect,
  useCallback
} from 'react';
import type {
  HTMLProps,
  ReactNode
} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import type { Theme } from 'src/theme';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingScreen from './LoadingScreen';

interface PageProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  title?: string;
  isLoading?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.dark,
  }
}));

const Page = forwardRef<HTMLDivElement, PageProps>(({
  className,
  children,
  title = '',
  isLoading = false,
  ...rest
}, ref) => {
  const classes = useStyles();
  const location = useLocation();

  const sendPageViewEvent = useCallback(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sendPageViewEvent();
  }, [sendPageViewEvent]);

  return (
    <div
      className={clsx(classes.root, className)}
      ref={ref as any}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {isLoading ?
        <LoadingScreen />
        : children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  isLoading: PropTypes.bool
};

export default Page;
