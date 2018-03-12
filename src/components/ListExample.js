import React from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import ModeTrain from 'material-ui/svg-icons/maps/train';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ModeBUS from 'material-ui/svg-icons/maps/directions-bus';

const iconButtonElement = (
  <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const ListExampleMessages = () => (
  <div>
    <List>
      <Subheader>Today</Subheader>
     
      <ListItem
        leftAvatar={<Avatar icon={<ModeBUS />} />}
        rightIcon={<ActionInfo />}
        primaryText="Recipes"
        secondaryText={

          <p>
            <span >
              From: Station
                <br />
            </span>

            <span>
              To: Station
                <br />
            </span>
          </p>
        }
        secondaryTextLines={8}
      />
      <Divider inset={true} />

      <Divider inset={true} />
     
      <ListItem
        leftAvatar={<Avatar icon={<ModeTrain/>} />}
        rightIcon={<ActionInfo />}
        primaryText="Recipes"
        secondaryText={
      
          <p>
              <span >
                From: Station
                <br />
              </span>
         
              <span>
                To: Station
                <br />
              </span>
           </p>
        }
        secondaryTextLines={8}
      />
      <Divider inset={true} />
    
    </List>
  </div>
);

export default ListExampleMessages;
