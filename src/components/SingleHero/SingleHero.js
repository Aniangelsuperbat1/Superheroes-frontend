import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from "./styles.js";

const SingleHero = ({
  hero: { name, alterEgo, Home, wiki, photo, Powers, archNemesis },
  i,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea href={wiki} target="_blank">
        <CardMedia className={classes.media} image={photo} />
        <div>
          <Typography variant="body3" component="h2">
            Name: {alterEgo}
          </Typography>
          <CardContent>
            <Typography>Alter Ego: {name}</Typography>
          </CardContent>
        </div>
        <CardContent>
          <Typography
          // variant="body2"
          // color="textSecondary"
          >
            Home Town: {Home}
          </Typography>
          <Typography variant="body3" component="h2">
            Arch Nemesis: {archNemesis}
          </Typography>
        </CardContent>
        <CardContent>
          Powers:
          {Powers.map((power) => {
            return <li>{power}</li>;
          })}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" href={wiki} target="_blank">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary" component="h2">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default SingleHero;
