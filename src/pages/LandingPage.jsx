import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// import ListItemText from "@material-ui/core/ListemItemText";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Typography,
} from "@material-ui/core/";


import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

//------! Icons

import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiTypescript } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMaterialUi } from "react-icons/si";

// My things
import Menus from "./ultils/Menu";
import profilephoto from "../images/profile.png";
import myServicesImg from "../images/myServices.png";
import findAnOrphanage from "../images/orphanages.png";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
  },

  section: {
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #434343 74%)",
    width: "5vw",
    height: "100vh",
    position: "fixed",
    marginTop:"50px"
  },

  landingGrid: {
    width: "85vw",
    marginLeft: "50%",
    transform: "translate(-50%)",
  },
  gridPhoto: {
    marginTop: "100px",
    backgroundImage: `url(${profilephoto})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "100px",
    width: "200px",
    height: "200px",
    border: "2px solid black",
    boxShadow: "10px 10px 20px -4px rgba(0,0,0,0.75)", //I generated this shadow on an WebSite
  },
  imageCode: {
    width: "250px",
  },
  myServicesPhoto: {
    width: "280x",
    height: "500px",
    marginLeft: "20px",
    border: "2px solid black",
    borderRadius: "20px",
    marginTop: "50px",
  },
  footerGrid: {
    backgroundColor: "red",
    bottom: 0,
    position: "absolute",

    // TODO: CORRECT THE SCROLL DOWN THING - I on;y see the footer if I scro
  },

  infoGrid: {
    marginTop: "50px",
  },

  helloTypography: {
    fontSize: "20px",
  },
  nameTypography: {},
  fullstackTypography: {
    fontWeight: "bold",
  },
  phraseTypography: {
    fontStyle: "italic",
    marginTop: "5px",
    color: "#1BCA9B",
    fontWeight: "bold",
  },

  paper: {
    height: "350px",
    width: "800px",
    margin: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  paperGrid: {
    marginTop: "20px",
  },

  iconPaper: {
    fontSize: "3em",
    marginTop: "50px",
    marginBottom: "20px",
  },

  WhatIKnowGrid: {},
  whoIam: {
    lineHeight: "40px",
    fontSize: "20px",
    marginRight: "10px",
    marginLeft: "15px",
  },
  ///-------------------!!!!
  WhatIknowCard: {
    marginBottom: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },

  miniIconPaper: {
    fontSize: "1.5em",
    marginTop: "50px",
    marginBottom: "20px",
  },

  titleTypograph: {
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "30px",
    fontFamily: "Raleway",
  },

  projectsCards: {
    maxWidth: 290,
    marginBottom: "20px",
  },
  projectsCardMedia: {
    height: 200,
  },

  projectsTitleTypograph: {
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  projectCardsButtons: {
    fontWeight: "bold",
    marginLeft: "7px",
  },

  sectionHide: {
    display: "none",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container className={classes.mainGrid}>
      {
        <section className={matches ? classes.section : classes.sectionHide}>
          {Menus()}{" "}
        </section>
      }
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        className={classes.landingGrid}
      >
        <Grid item className={classes.gridPhoto}>
        </Grid>{" "}
        <Grid item className={classes.infoGrid}>
          <Typography className={classes.helloTypography}>
            Hello, I'm <strong>Gercino Luiz.</strong>
          </Typography>
          <Typography>
            {" "}
            I'm a <strong> Full-Stack Developer</strong>
          </Typography>
          <Typography className={classes.phraseTypography}>
            I'll change the world through my code :){" "}
          </Typography>
        </Grid>
        <Grid item className={classes.paperGrid} direction="column">
          <Paper elevation={2} className={classes.paper}>
            <Grid
              container
              direction="column"
              style={{ height: "100%" }}
              alignItems="center"
            >
              <Typography id="WhoIam" className={classes.titleTypograph}>
                Who I am.
              </Typography>
              <Typography className={classes.whoIam}>
                A learning lover, who wants to change the world somehow and make
                others lives better through my code. I've always sought jobs and
                challenges that can make my work and life meaningful. I love
                people and I understand they are the most important asset of an
                corporation, so that I've worked hard on my soft skills to be
                prepared to work alongside any kind of people. With this in mind
                I think I can achieve any goal in my life.
              </Typography>
            </Grid>
          </Paper>{" "}
          {/* Now I start the expanded Card Thing, I didint get Everything it does, but I got to do */}
          <Card className={classes.WhatIknowCard}>
            <CardContent>
              <Grid container direction="column" alignItems="center">
                {/* <img className={classes.imageCode} src={mern}></img> */}

                <Typography id="WhatIknow" className={classes.titleTypograph}>
                  What I know.
                </Typography>

                <Grid container justify="space-evenly">
                  <Grid item>
                    <Grid
                  
                      item
                      container
                      direction="column"
                      alignItems="center"
                      justify="center"
                    >
                      <DiMongodb
                        className={classes.iconPaper}
                        style={{ color: "#26ae60" }}
                      />{" "}
                      <strong>MongoDB</strong>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid item container direction="column">
                      <FaReact
                        style={{ color: "#25CCF7" }}
                        className={classes.iconPaper}
                      />
                      <strong>React</strong>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                   
                      item
                      container
                      direction="column"
                      alignItems="center"
                      justify="center"
                    >
                      <DiNodejs
                        className={classes.iconPaper}
                        style={{ color: "#6AB04A" }}
                      />{" "}
                      <strong>NodeJS</strong>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="center"
                      justify="center"
                    >
                      <SiJavascript
                        className={classes.iconPaper}
                        style={{ color: "#F3B63A" }}
                      />{" "}
                      <strong>Java Script</strong>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                     
                      item
                      container
                      direction="column"
                      alignItems="center"
                      justify="center"
                    >
                      <SiMaterialUi
                        className={classes.iconPaper}
                        style={{ color: "#0ABDE3" }}
                      />{" "}
                      <strong>Material UI</strong>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions disableSpacing>
              {/* {" Didnt know what they did here "} */}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Grid container direction="column" alignItems="center">
                  {/* <img className={classes.imageCode} src={mern}></img> */}

                  <Grid container justify="space-evenly">
                    <Grid item>
                      <Grid
                       
                        item
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                      >
                        <FcLinux
                          className={classes.miniIconPaper}
                          style={{ color: "#26ae60" }}
                        />{" "}
                        <strong>Linux</strong>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Grid
                     
                        item
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                      >
                        <SiTypescript
                          style={{ color: "#2475B0" }}
                          className={classes.miniIconPaper}
                        />
                        <strong>TypeScript</strong>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Grid
                      
                        item
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                      >
                        <SiPostman
                          className={classes.miniIconPaper}
                          style={{ color: "#FF7A00" }}
                        />{" "}
                        <strong>PostMan</strong>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Grid
                 
                        item
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                      >
                        <SiCss3
                          className={classes.miniIconPaper}
                          style={{ color: "#3080DE" }}
                        />{" "}
                        <strong>CSS3</strong>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          {/* End Of the card Thing */}
          <Grid container direction="column" alignItems="center">
            <Typography id="WhatIdid" className={classes.titleTypograph}>
              What I Did.
            </Typography>
            <Grid item container direction="rown" justify="space-evenly">
              <Card className={classes.projectsCards}>
                <CardActionArea>
                  <CardMedia
                    title="My Services"
                    className={classes.projectsCardMedia}
                  >
                    <img
                      className={classes.projectsCardMedia}
                      src={myServicesImg}
                      alt="cards"
                    ></img>
                  </CardMedia>
                  <CardContent>
                    <Typography className={classes.projectsTitleTypograph}>
                      My Services
                    </Typography>
                    App that helps people to find the closest place that offers
                    the service they searched for.
                    <br />
                    <strong>Stack:</strong> It was developed using the MERN
                    stack.
                    <br />
                    <strong>Notes:</strong> I used MongoDB's geolocation
                    functions along with Google Maps API to make all the calcs
                    involving locations. I alsoo used Material-UI to style this
                    App.
                  </CardContent>
                  <Divider />
                  <CardActions>
                    {" "}
                    <Button className={classes.projectCardsButtons}>
                      <a
                        target="_blank"
                        style={{ textDecoration: "none" }}
                        rel="noopener noreferrer"
                        href="https://myservicesfront.herokuapp.com/"
                      >
                        Learn More
                      </a>
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>

              <Card className={classes.projectsCards}>
                <CardActionArea>
                  <CardMedia
                    title="My Services"
                    className={classes.projectsCardMedia}
                  >
                    <img
                      className={classes.projectsCardMedia}
                      src={findAnOrphanage}
                      alt="findAnOrphanage"
                    ></img>
                  </CardMedia>
                  <CardContent>
                    <Typography className={classes.projectsTitleTypograph}>
                      Find An Orphanage
                    </Typography>
                    App that helps people to find the closest Orphanage acordind
                    to their mobile location.
                    <br />
                    <strong>Stack:</strong> It was developed using NodeJS React
                    and SQLite stack.
                    <br />
                    <strong>Notes:</strong> This was developed in order to
                    improve my skills, therefore I have it only in my computer.
                  </CardContent>
                  <Divider />
                  <CardActions> </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
