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
import useSettings from 'src/hooks/useSettings';
import { THEMES } from 'src/constants';

const Settings: FC = () => {
  const ref = useRef<any>(null);
  const { settings, saveSettings } = useSettings();
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleChangeTheme = async () => {
    const newThemeSetting = isDark ? THEMES.LIGHT : THEMES.DARK; // Toggle Theme
    // Set theme before db
    setIsDark(previousValue => !previousValue);

    // Settings Context // TODO: del and use redux 
    saveSettings({
      direction: 'ltr',
      responsiveFontSizes: true,
      theme: newThemeSetting
    });
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
