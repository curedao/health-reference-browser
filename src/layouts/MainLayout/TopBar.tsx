import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import type { Theme } from 'src/theme';
import { appRoutes } from 'src/route-paths';
import Settings from './Settings';
import { businessLogic, environment } from 'src/config';

interface TopBarProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  toolbar: {
    height: 64
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const TopBar: FC<TopBarProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = () => {
    history.push(businessLogic.url_main_website);
  }

  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="default"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden smUp>
          <RouterLink to="/home">
            <Logo
              className={classes.logo}
            />
          </RouterLink>
        </Hidden>
        <Hidden xsDown>
          <RouterLink to="/home">
            <Logo
              className={classes.logo}
              type='logo_with_text'
            />
          </RouterLink>
        </Hidden>
        <Box flexGrow={1} />
        <Link
          className={classes.link}
          color="textSecondary"
          //component={RouterLink}
          href={businessLogic.url_doc_website}
          target="_blank"
          underline="none"
          variant="body2"
        >
          {"Documentation"}
        </Link>
        <Divider className={classes.divider} />
        <Box mr={2}>
          <Settings />
        </Box>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          //onClick={handleOnClick}
          href={businessLogic.url_main_website}
          //target="_blank"
        >
          Home
        </Button>

      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
