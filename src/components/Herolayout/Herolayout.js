import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import SingleHero from "../SingleHero/SingleHero";
import useStyles from "./styles.js";

const heroCards = [
  { color: "#00838f", title: "Superheroes", text: "Give me all the heroes" },
  {
    color: "#1234c0",
    title: "Villians",
    text: "Give me all the villians",
  },
  {
    color: "#2579c0",
    title: "Superhero By Term",
    info: "DC, Marvel",
    text: "Give me all the heroes from DC",
  },
  {
    color: "#9175c0",
    title: "Villian By Term",
    info: "DC, Marvel",
    text: "Give me all the Villians from Marvel",
  },
];

const Herolayout = ({ heroes }) => {
  const classes = useStyles();

  if (!heroes.length) {
    return (
      <>
        <div className={classes.logoContainer}>
          <img
            src="https://nofilmschool.com/sites/default/files/styles/facebook/public/mv5bndc4ymfimjctm2myyy00ytfiltg0zmetnjgwzdyzzguwmtu1xkeyxkfqcgdeqwpnyw1i._v1_.jpg?itok=OxMUdce5"
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
        alignItems="stretch"
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
