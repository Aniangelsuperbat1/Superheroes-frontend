import React from 'react';
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const heroCards = [
  { color: "#00838f", title: "Superheroes", text: "Give me all the heroes" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
];

const Herolayout = ({heroes}) => {
  const classes = useStyles()
    
      if (!heroes.length) {
    return (
      <Grow in>
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
            </Grid>
          ))}
        </Grid>
      </Grow>
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
            {/* <SingleHero i={i} article={article} /> */}
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default Herolayout;