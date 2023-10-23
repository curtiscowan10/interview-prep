import LinkBase from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationItems,
  NavigationItemType,
} from "../../../../constants/NavigationItems";
import "./DrawerItems.scss";

type DrawerItemsProps = {
  onClick: () => void;
}

const DrawerItems = ({onClick}: DrawerItemsProps) => (
  <List>
    {NavigationItems.map(({ icon, text, url }: NavigationItemType) => (
      <LinkBase component={Link} to={url} key={text} underline="none" onClick={onClick}>
        <ListItem disablePadding className="drawer__menuItem">
          <ListItemButton>
            {icon}
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      </LinkBase>
    ))}
  </List>
);

export default DrawerItems;
