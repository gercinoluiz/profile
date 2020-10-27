import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles,  useMediaQuery, useTheme } from "@material-ui/core";
import {
  SwipeableDrawer,
  IconButton,
} from "@material-ui/core/";

//-----! Icons


import MenuIcon from "@material-ui/icons/Menu";

import Menus from "../ultils/Menu";

const useStyles = makeStyles((theme) => ({
  // toolbar: { ...theme.mixins.toolbar, height: "50px", zIndex: 4 },

  header: {
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #434343 74%)",
    width: "100vw",
    height: "5vh",
    [theme.breakpoints.down("sm")]: {
      width: "0vw",
      height: "0vh",
    },
    zIndex: 100,
    position: "fixed",
  },
  drawer: {
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #434343 74%)",
    width: "5vw",
    [theme.breakpoints.down("sm")]: {
      width: "25vw",
    },
  },

  gridIcons: {
    marginRight: "50px",
  },
  icons: {
    color: "#fff",
    fontSize: "40px",
    marginRight: "2px",
    marginLeft: "10px",
    marginTop: "30px",
  },

  aLinks: {
    textDecoration: "none",
    color: "none",
  },
}));

export default function Hader() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [openSwipeableDrawer, setOpenSwipeableDrawer] = useState(false);

  //Handlers

  const handleOpenopenSwipeableDrawer = () => {
    setOpenSwipeableDrawer(true);
  };

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        open={openSwipeableDrawer}
        onClose={() => setOpenSwipeableDrawer(false)}
      >
        {Menus()}
      </SwipeableDrawer>
    </>
  );

  return (
    <>
      <div className={classes.toolbar}></div>
      <header className={classes.header}>
        <Grid container justify="space-between">
          {matches ? null : (
            <IconButton onClick={handleOpenopenSwipeableDrawer}>
              <MenuIcon style={{ color: "black", fontSize: "40px" }} />
            </IconButton>
          )}
        </Grid>
        {drawer}
      </header>
    </>
  );
}
