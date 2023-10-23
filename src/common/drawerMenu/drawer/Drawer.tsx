import { Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import React from "react";

import DrawerItems from "./items/DrawerItems";

type DrawerProps = {
  open: boolean;
  handleDrawerToggle: () => void;
};

const Drawer = ({ open, handleDrawerToggle }: DrawerProps) => {
  return (
    <>
      <MuiDrawer
        open
        variant="permanent"
        onClose={handleDrawerToggle}
        sx={{
          width: 240,
          ["& .MuiDrawer-paper"]: {
            width: 240,
            boxSizing: "border-box",
            overflow: "hidden",
          },
          display: { xs: "none", sm: "block" },
        }}>
        <Toolbar />
        <DrawerItems onClick={handleDrawerToggle}/>
      </MuiDrawer>
      <MuiDrawer
        open={open}
        variant="temporary"
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}>
        <Toolbar />
        <DrawerItems onClick={handleDrawerToggle}/>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
