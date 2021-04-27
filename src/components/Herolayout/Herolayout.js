import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import SingleHero from "../SingleHero/SingleHero";
import useStyles from "./styles.js";

const heroCards = [
  {
    color: "#00838f",
    title: "Superheroes",
    text: " Jarvis, Give me all the heroes",
  },
  {
    color: "#1234c0",
    title: "Villains",
    text: "Jarvis, Give me all the Villains",
  },
  {
    color: "#2579c0",
    title: "Superhero By Term",
    info: "DC, Marvel",
    text: "Jarvis, Give me all the heroes from DC ",

  },
  {
    color: "#9175c0",
    title: "Villain By Term",
    info: "DC, Marvel",
    text: "Jarvis, Give me all the Villains from Marvel"
  },
];

const Herolayout = ({ heroes }) => {
  const classes = useStyles();

  if (!heroes.length) {
    return (
      <>
        <div className={classes.logoContainer}>
          <img
            src="https://sm.mashable.com/t/mashable_in/photo/default/8-years-of-the-avengers-how-joss-whedons-risk-became-crucial_38p5.h960.jpg"
            className={classes.Logo}
            alt="logo"
          />
        </div>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {heroCards.map((heroCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.heroCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: heroCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {heroCard.title}
                </Typography>
                {heroCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{heroCard.title.split(" ")[2]}</strong>: <br />
                    {heroCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{heroCard.text}</i>
                </Typography>
              </div>
              <div></div>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        // alignItems="stretch"
        spacing={3}
      >
        {heroes.map((hero, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <SingleHero i={i} hero={hero} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default Herolayout;
