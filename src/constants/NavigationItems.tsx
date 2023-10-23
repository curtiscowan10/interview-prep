import AccountCircle from "@mui/icons-material/AccountCircle";
import React, { ReactElement } from "react";
import { RouteUrls } from "./RouteUrls";

export type NavigationItemType = {
  icon: ReactElement
  text: string,
  url: string
}

export const NavigationItems: Array<NavigationItemType> = [
  {icon: <AccountCircle />, text: "Home", url: RouteUrls.home}
];