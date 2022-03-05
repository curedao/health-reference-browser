import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import { appRoutes } from 'src/route-paths';
import { businessLogic } from 'src/config';

interface NotAvailableViewProps {
  className?: string;
  title?: string | React.ReactNode;
  img_src?: string;
  img_height?: number;
  showAltActions?: boolean;
  button_text?: string;
  button_link?: string;
  button_route?: string;
  button_onclick?: (event: any) => void;
  button_disabled?: boolean;
  contact_support?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(8)
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto',
    color: '#3dc1b9'
  }
}));

const NotAvailableView: FC<NotAvailableViewProps> = ({ className, title, img_src, img_height, showAltActions, button_text, button_link, button_route, button_onclick, button_disabled, contact_support, ...rest }) => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="lg"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        mt={10}
      >
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <img
            alt="Not Available"
            className={classes.image}
            src={img_src}
            style={img_height ? { height: img_height } : {}}
          />
        </Box>
        <Box
          mt={9}
          display="flex"
          justifyContent="center"
        >
          <Typography
            align="center"
            variant="subtitle2"
            color="textSecondary"
          >
            {title}
          </Typography>
        </Box>

        {showAltActions ?
          <React.Fragment>
            <Box
              mt={4}
              display="flex"
              justifyContent="center"
            >
              {button_route ?
                <Button
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to={button_route || appRoutes.searchReferences}
                  disabled={button_disabled}
                >
                  {button_text}
                </Button>
                : null}
              {button_link ?
                <Button
                  variant="contained"
                  color="secondary"
                  href={button_link}
                  target="_blank"
                  disabled={button_disabled}
                >
                  {button_text}
                </Button>
                : null}
              {button_onclick ?
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={button_onclick}
                  disabled={button_disabled}
                >
                  {button_text}
                </Button>
                : null}
            </Box>
            {contact_support ?
              <Box
                mt={5}
                display="flex"
                justifyContent="center"
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  href={`mailto:${businessLogic.support_email}`}
                  target="_blank"
                >
                  {"Contact Support"}
                </Button>
              </Box>
              : null}

          </React.Fragment>
          : null}

      </Box>
    </Container>
  );
};

NotAvailableView.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  // @ts-ignore
  type: PropTypes.string,
  img_src: PropTypes.string,
  showAltActions: PropTypes.bool,
  button_text: PropTypes.string,
  button_link: PropTypes.string,
  button_route: PropTypes.string,
  button_onclick: PropTypes.func,
  button_disabled: PropTypes.bool,
  contact_support: PropTypes.bool,
};

NotAvailableView.defaultProps = {
  title: 'This Content is not available. Is the URL correct?',
  img_src: "/static/images/undraw_no_data_qbuo.svg",
  showAltActions: true,
  button_text: "Back to Home",
  contact_support: false
};

export default NotAvailableView;