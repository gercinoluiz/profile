import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";

// ---------------- !Icons

import { RiFilePaper2Line } from "react-icons/ri";
import { SiAboutDotMe } from "react-icons/si";
import { CgCodeSlash } from "react-icons/cg";
import { FiList } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import cv from "../../docs/Gercino Luiz.pdf";

const useStyles = makeStyles((theme) => ({
  list: {},
  listItem: {
    ...theme.typography.listItems,

    height: "150px",
    "&:hover": {
      color: "#53E0BC",
    },
  },
  divider: {
    backgroundColor: "#C3C3C3",
  },
  icon: {
    fontSize: "2em",
  },
}));

export default function Menus() {
  const classes = useStyles();

  const menus = [
    {
      name: "Who I'am",
      icon: <SiAboutDotMe className={classes.icon} />,
      link: "#WhoIam",
    },
    {
      name: "What I know",
      icon: <FiList className={classes.icon} />,
      link: "#WhatIknow",
    },
    {
      name: "What I did",
      icon: <CgCodeSlash className={classes.icon} />,
      link: "#WhatIdid",
    },

    {
      name: "My CV",
      icon: <RiFilePaper2Line className={classes.icon} />,
      link: `${cv}`,
    },

    {
      name: "LinkedIn",
      icon: <FaLinkedin className={classes.icon} />,
      link: "https://www.linkedin.com/in/gercino-luiz-509405b6/",
    },

    {
      name: "GitHub",
      icon: <AiFillGithub className={classes.icon} />,
      link: "https://github.com/gercinoluiz",
    },
  ];

  return (
    <List className={classes.list}>
      <>
        {menus.map((menuItem) => (
          <>
            <a
              style={{ textDecoration: "none" }}
              target={
                menuItem.name === "My CV" || "GitHub" || "LinkedIn"
                  ? "_blank"
                  : null
              }
              href={`${menuItem.link}`}
            >
              <ListItem button className={classes.listItem}>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  direction="column"
                >
                  {menuItem.icon}

                  <Typography style={{ fontSize: "10px", textAlign: "center" }}>
                    {" "}
                    {menuItem.name}{" "}
                  </Typography>
                </Grid>
              </ListItem>
            </a>
          </>
        ))}
      </>
    </List>
  );
}
