import React, { useEffect } from 'react';
import type { FC } from 'react';
import {
  Container,
  Box,
  Grid,
  Checkbox,
  Collapse,
  FormControlLabel,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import type { Theme } from 'src/theme';
import { useSelector } from 'src/store';
import { BiomarkersState } from 'src/slices/biomarkers.slice';
import Page from 'src/components/Page';
import Header from './Header';
// 
import { biomarkerCategories, secondLevelBiomarkerTables, labBiomarkerTables } from 'src/constants/biomarkerTables';
import { Biomarker, SpecialParameter } from 'src/models/biomarker.model';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  nested: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(6)
    }
  },
  cardTitle: {
    color: theme.palette.text.primary
  },
  collapse: {
    paddingBottom: theme.spacing(5)
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }
}));

interface BiomarkerListItemProps {
  biomarker: Biomarker;
  collapsed?: boolean;
}

const BiomarkerListItem: FC<BiomarkerListItemProps> = ({ biomarker, collapsed, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleCollapseItem = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (collapsed === true) {
      setOpen(true);
    };
    if (collapsed === false) {
      setOpen(false);
    };
  }, [collapsed]);

  const nestedList: SpecialParameter[] = secondLevelBiomarkerTables[biomarker.id] || [];

  return (
    <React.Fragment key={biomarker?.id}>
      <ListItem
        divider
        dense
        button
        onClick={handleCollapseItem}
        {...rest}
      >
        <ListItemText
          primary={biomarker.name_long}
          primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }}
        //secondary={`${biomarker?.unit}` || ''}
        />
        <ListItemSecondaryAction>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {`${biomarker?.unit}` || ' - '}
          </Typography>
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemSecondaryAction>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit className={classes.collapse}>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText
              secondary={biomarker?.description || 'No description so far'}
            />
          </ListItem>
          {biomarker?.references?.length ?
            <ListItem>
              <ListItemText
                primary={'More information'}
                primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }}
                secondary={
                  <React.Fragment>
                    {biomarker.references.map((link, index) =>
                      <Link
                        component="a"
                        href={link}
                        target="_blank"
                        // color="textSecondary"
                        underline="always"
                        color="textSecondary"
                        variant="caption"
                        key={index}
                      >
                        {link}
                      </Link>
                    )}
                  </React.Fragment>
                }
              />
            </ListItem>
            : null}

          {nestedList.length ? nestedList.map((nl, index) =>
            <ListItem
              divider
              button
              dense
              className={classes.nested}
              key={index}
            >
              <ListItemText
                primary={nl.name_long}
                primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }}
              />
              <ListItemSecondaryAction>
                <Typography
                  color="textSecondary"
                  variant="caption"
                >
                  {`${nl?.unit}` || ''}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          )
            : null}


          {biomarker.id === 'blood_analysis' ?
            Object.keys(labBiomarkerTables).map((lid, index) => {
              const labTable: SpecialParameter[] = labBiomarkerTables[lid];
              return (
                <BiomarkerListItemNested
                  key={index}
                  title={lid}
                  labTable={labTable}
                  collapsed={collapsed}
                />
              )
            })
            : null}

        </List>
      </Collapse>

    </React.Fragment >
  )
}

interface BiomarkerListItemNestedProps {
  title: string;
  labTable: SpecialParameter[];
  collapsed?: boolean;
}

const BiomarkerListItemNested: FC<BiomarkerListItemNestedProps> = ({ title, labTable, collapsed, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleCollapseItem = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment {...rest}>
      <ListItem
        divider
        dense
        button
        onClick={handleCollapseItem}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }}
        />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {labTable?.length ? labTable.map((nl, index) =>
            <ListItem
              divider
              button
              dense
              className={classes.nested}
              key={index}
            >
              <ListItemText
                primary={nl.name_long}
                primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }}
              />
              <ListItemSecondaryAction>
                <Typography
                  color="textSecondary"
                  variant="caption"
                >
                  {`${nl?.unit}` || ''}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          )
            : null}
        </List>
      </Collapse>
    </React.Fragment>
  )
}

const AllBiomarkersView: FC = () => {
  const classes = useStyles();
  const theme = useTheme<Theme>();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const biomarkersData = useSelector<BiomarkersState>((state) => state.biomarkers);

  const handleCollapseItem = () => {
    setOpen(!open);
  };

  return (
    <Page
      className={classes.root}
      title="Biomarkers"
    >
      <Container
        maxWidth="lg"
      >
        <Header />

        <Box mt={3} mb={2}>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {'This list serves as an overview of which biomarkers and health relevant variables we have standardized for you to choose from. Click on the List items to get more information.'}
          </Typography>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        disableGutters={mobileDevice ? true : false}
      >
        <Grid
          container
          spacing={mobileDevice ? 2 : 3}
        //direction="column"
        >
          <Grid
            item
            xs={12}
            md={12}
          >
            <Box pl={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={open}
                    onChange={handleCollapseItem}
                    size="small"
                  />
                }
                label={
                  <Typography
                    color="textSecondary"
                    variant="caption"
                  >
                    {"Collapse all"}
                  </Typography>
                }
              />
            </Box>
          </Grid>

          {biomarkerCategories.map((category, index) => {
            if (!category?.name || category?.id === 'custom') {
              return null;
            };

            return (
              <Grid
                item
                xs={12}
                md={8}
                key={index}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.cardTitle}>{category.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List
                      component="div"
                      disablePadding
                      className={classes.cardList}
                    >
                      {biomarkersData?.allIds?.length ? biomarkersData.allIds.map((bid, index) => {
                        const biomarker: Biomarker = biomarkersData?.byId[bid];
                        if (!biomarker || biomarker?.category !== category.id) {
                          return null;
                        };
                        return (
                          <BiomarkerListItem
                            key={index}
                            biomarker={biomarker}
                            collapsed={open}
                          />
                        );
                      }) : null}
                    </List>
                  </AccordionDetails>
                </Accordion>

              </Grid>
            )
          })}

        </Grid>
      </Container>
    </Page>
  );
};

export default AllBiomarkersView;
