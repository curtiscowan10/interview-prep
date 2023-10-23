import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import DarkModeToggle from "./darkModeToggle/DarkModeToggleContainer";

type AppBarProps = {
  handleDrawerToggle: () => void;
};

const AppBar = ({ handleDrawerToggle }: AppBarProps) => (
  <MuiAppBar
    component="nav"
    position="relative"
    sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <IconButton
        component="label"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        sx={{
          display: { sm: "none" },
        }}>
        <MenuIcon />
      </IconButton>
      <DarkModeToggle />
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
