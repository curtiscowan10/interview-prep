import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import NotesIcon from "@mui/icons-material/Notes";
import CategoriesIcon from "@mui/icons-material/Category";
import React, { ReactElement } from "react";
import { RouteUrls } from "./RouteUrls";

export type NavigationItemType = {
  icon: ReactElement
  text: string,
  url: string
}

export const NavigationItems: Array<NavigationItemType> = [
  {icon: <HomeIcon />, text: "Home", url: RouteUrls.home},
  {icon: <NotesIcon />, text: "Notes", url: RouteUrls.notes},
  {icon: <CategoriesIcon />, text: "Categories", url: RouteUrls.categories},
  {icon: <AccountCircle />, text: "Account Settings", url: RouteUrls.settings}
];