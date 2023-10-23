import React from "react";
import { useDispatch } from "react-redux";
import AppBar from "./AppBar";
import { toggleDrawerOpen } from "../../../store/ui/uiActions";

function AppBarContainer() {
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleDrawerOpen());
  };

  return <AppBar handleDrawerToggle={handleDrawerToggle} />
}

export default AppBarContainer;