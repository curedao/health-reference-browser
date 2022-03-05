import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  Breadcrumbs,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Plus as PlusCircleIcon } from 'react-feather';
import type { Theme } from 'src/theme';
import { appRoutes } from 'src/route-paths';

interface HeaderProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
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
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to={appRoutes.searchReferences}
            component={RouterLink}
          >
            Search
          </Link>
          <Typography
            variant="body1"
            color="textPrimary"
          >
            References
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Overview
        </Typography>
      </Grid>
      {/* <Grid item>
        <Button
          color="secondary"
          variant="contained"
          component={RouterLink}
          to={appRoutes.requestBiomarker}
          className={classes.action}
          startIcon={
            <SvgIcon fontSize="small">
              <PlusCircleIcon />
            </SvgIcon>
          }
        >
          Add Biomarker
        </Button>
      </Grid> */}
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
