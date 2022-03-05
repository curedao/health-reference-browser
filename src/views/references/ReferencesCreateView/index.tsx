import React, { useEffect, useState } from 'react';
import type { FC, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Box,
  Divider,
  Tabs,
  Tab,
  makeStyles
} from '@material-ui/core';
import useQuery from 'src/hooks/useQuery';
import Page from 'src/components/Page';
import type { Theme } from 'src/theme';
import Header from './Header';
import BiomarkerCreateForm from './BiomarkerCreateForm';
import { appRoutes } from 'src/route-paths';
import BiomarkerMultipleUploadForm from './BiomarkerMultipleUploadForm';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

const ReferencesCreateView: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const tab = useQuery("tab");
  const [currentTab, setCurrentTab] = useState<string>('single');

  const tabs = [
    { value: 'single', label: 'Single' },
    { value: 'multiple', label: 'Multiple' },
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
    history.push(`${appRoutes.searchCreateReferences}?tab=${value}`);
  };

  useEffect(() => {
    if (tabs.find(t => t.value === tab)) {
      setCurrentTab(tab);
    }
  }, [tab]);

  return (
    <Page
      className={classes.root}
      title="Create Health Data Reference"
    >
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="secondary"
            value={currentTab}
            variant="scrollable"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === 'single' && <BiomarkerCreateForm />}
          {currentTab === 'multiple' && <BiomarkerMultipleUploadForm />}
        </Box>

      </Container>
    </Page >
  );
};

export default ReferencesCreateView;
