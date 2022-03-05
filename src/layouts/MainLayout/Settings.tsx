import React, {
  useState,
  useRef
} from 'react';
import type { FC } from 'react';
import {
  IconButton,
  SvgIcon,
  Tooltip,
} from '@material-ui/core';
import {
  Sun as LightIcon,
  Moon as DarkIcon
} from 'react-feather';

const Settings: FC = () => {
  const ref = useRef<any>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleChangeTheme = async () => {
    // Set theme before db
    setIsDark(previousValue => !previousValue);
  };

  return (
    <React.Fragment>
      <Tooltip title="Toggle Dark/Light">
        <IconButton
          color="inherit"
          onClick={handleChangeTheme} // handleOpen to change to popover
          ref={ref}
        >
          <SvgIcon fontSize="small">
            {isDark ? <DarkIcon /> : <LightIcon />}
          </SvgIcon>
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
}

export default Settings;
