import { Box, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Center from '../../containers/layouts/Center';
import Scaffold from '../../containers/layouts/Scaffold';
import useActions from '../../redux/actions';
import * as TabActions from '../../redux/actions/tabs';
import { RootState } from '../../redux/reducers';
import TeammingTab from '../../views/Settings/TeammingTab';
import UserManagement from '../../views/Settings/UserManagementTab/UserManagement';
import useStyles from './styles';

interface TabPanelProps {
  children: React.ReactNode;
  index: any;
  value: any;
}

// TabPanel ise used to implement the functioning of tabs
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

// tabProps returns 'id' and 'aria-control' props of Tab
function tabProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Settings: React.FC = () => {
  const classes = useStyles();

  const settingsTabValue = useSelector(
    (state: RootState) => state.tabNumber.settings
  );
  const userData = useSelector((state: RootState) => state.userData);
  const tabs = useActions(TabActions);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    tabs.changeSettingsTabs(newValue);
  };

  return (
    <Scaffold>
      <Typography className={classes.Head}>Settings </Typography>
      <Paper className={classes.root} elevation={0}>
        <Tabs
          className={classes.tab}
          value={settingsTabValue}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Team" {...tabProps(0)} />
          {userData.username === 'admin' ? (
            <Tab label="User Management" {...tabProps(1)} />
          ) : (
            <></>
          )}
          <Tab label="My Account" {...tabProps(2)} />
        </Tabs>
      </Paper>

      <TabPanel value={settingsTabValue} index={0}>
        <TeammingTab />
      </TabPanel>
      {userData.username === 'admin' ? (
        <TabPanel value={settingsTabValue} index={1}>
          <UserManagement />
        </TabPanel>
      ) : (
        <></>
      )}
      <TabPanel value={settingsTabValue} index={2}>
        {/* <AccountSettings /> */}
        <Center>
          <Typography variant="h3" align="center">
            My Account Page comming soon
          </Typography>
        </Center>
      </TabPanel>
    </Scaffold>
  );
};

export default Settings;
