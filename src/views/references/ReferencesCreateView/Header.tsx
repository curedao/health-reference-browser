import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { appRoutes } from 'src/route-paths';

interface HeaderProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      justifyContent="space-between"
      spacing={3}
      {...rest}
    >
      <Grid item>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Define Reference
        </Typography>
      </Grid>
      <Grid item>
        <Button
          component={RouterLink}
          to={appRoutes.searchReferences}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
