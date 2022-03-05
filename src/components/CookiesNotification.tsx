import React, {
  useState,
  useEffect
} from 'react';
import type { FC } from 'react';
import Cookies from 'js-cookie';
import {
  Box,
  Button,
  Link,
  Portal,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import { businessLogic } from 'src/config';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    maxWidth: 600,
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    outline: 'none',
    zIndex: 2000
  },
  action: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  }
}));

const CookiesNotification: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    Cookies.set('consent', 'true', { sameSite: 'lax' });
    setOpen(false);
  };

  useEffect(() => {
    const consent: string | undefined = Cookies.get('consent');

    if (!consent) {
      setOpen(true);
    }
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div className={classes.root}>
        <Typography
          variant="body1"
          color="inherit"
        >
          We use Cookies to ensure that we give you the best experience on our
          website. Read our
          {' '}
          <Link
            component="a"
            color="inherit"
            underline="always"
            href={businessLogic.url_privacy_policy}
            target="_blank"
          >
            Privacy Policy
          </Link>
          .
        </Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            onClick={handleClose}
            variant="contained"
            className={classes.action}
          >
            I Agree
          </Button>
        </Box>
      </div>
    </Portal>
  );
};

export default CookiesNotification;
