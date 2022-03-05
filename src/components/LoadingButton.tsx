import React, { ReactElement } from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  makeStyles,
  colors,
  Avatar
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import type { Theme } from 'src/theme';

interface LoadingButtonProps {
  className?: any;
  children?: string | (string | ReactElement<any, any>)[];
  isSubmitting?: boolean;
  disabled?: boolean;
  startIcon?: any;
  onClick?: any;
  type?: "button" | "reset" | "submit";
  href?: string;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  color?: "inherit" | "default" | "primary" | "secondary";
  fullWidth?: boolean;
  active?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  avatar: {
    width: 10,
    height: 10,
    backgroundColor: colors.lightGreen[700]
  }
}));

const LoadingButton: FC<LoadingButtonProps> = ({
  className,
  children,
  startIcon,
  onClick,
  type,
  disabled,
  isSubmitting,
  href,
  variant,
  size,
  color,
  fullWidth,
  active,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <span
      className={classes.root}
      {...rest}
    >
      <Button
        className={className}
        onClick={onClick}
        disabled={disabled || isSubmitting}
        type={type}
        href={href}
        variant={variant}
        size={size}
        color={color}
        fullWidth={fullWidth}
        startIcon={active === true || active === false ?
          <Avatar
            alt="status"
            className={classes.avatar}
            style={{ backgroundColor: active === true ? colors.lightGreen[700] : colors.amber[500] }}
            variant="circular"
          >
            {''}
          </Avatar>
          : startIcon
        }


      >
        {children}
      </Button>
      {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} color="secondary" />}
    </span>
  );
};

LoadingButton.propTypes = {
  className: PropTypes.string
};

export default LoadingButton;
