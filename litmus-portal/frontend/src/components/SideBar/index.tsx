import { Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { history } from '../../redux/configureStore';
import { RootState } from '../../redux/reducers';
import useStyles from './styles';

interface CustomisedListItemProps {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  label: string;
}

const CustomisedListItem: React.FC<CustomisedListItemProps> = ({
  children,
  handleClick,
  label,
}) => {
  const classes = useStyles();
  return (
    <ListItem button onClick={handleClick} className={classes.drawerListItem}>
      <ListItemIcon className={classes.listIcon}>{children}</ListItemIcon>
      <ListItemText primary={label} className={classes.listText} />
    </ListItem>
  );
};

const SideBar: React.FC = () => {
  const classes = useStyles();
  const userRole = useSelector((state: RootState) => state.userData.userRole);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Link to="/" className={classes.homeLink}>
        <div className={classes.litmusDiv}>
          <img
            src="/icons/litmusPurple.svg"
            alt="litmus logo"
            className={classes.logo}
          />
          <Typography className={classes.litmusHome} variant="body1">
            Litmus
          </Typography>
        </div>
      </Link>

      <List className={classes.drawerList}>
        <CustomisedListItem
          key="home"
          handleClick={() => {
            history.push('/');
          }}
          label="Home"
        >
          <img src="/icons/workflows.png" alt="home" />
        </CustomisedListItem>
        <CustomisedListItem
          key="workflow"
          handleClick={() => {
            history.push('/workflows');
          }}
          label="Workflows"
        >
          <img src="/icons/workflows.png" alt="workflow" />
        </CustomisedListItem>
        {/* <CustomisedListItem
          key="hub"
          handleClick={() => {
            history.push('/404');
          }}
          label="My Hub"
        >
          <img src="/icons/hub.png" alt="hub" />
        </CustomisedListItem> */}
        <CustomisedListItem
          key="community"
          handleClick={() => {
            history.push('/community');
          }}
          label="Community"
        >
          <img src="/icons/community.png" alt="community" />
        </CustomisedListItem>
        {userRole === 'Owner' && (
          <CustomisedListItem
            key="settings"
            handleClick={() => {
              history.push('/settings');
            }}
            label="Settings"
          >
            <img src="/icons/setting.png" alt="settings" />
          </CustomisedListItem>
        )}
      </List>
    </Drawer>
  );
};

export default SideBar;
