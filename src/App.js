import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import firebase from "./firebase";
import Herolayout from "./components/Herolayout/Herolayout";
import useStyles from "./styles"
import { Typography } from "@material-ui/core";

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [activeHero, setActiveHero] = useState(-1)
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, heroes, number }) => {
        if (command === "super") {
          setSuperheroes(heroes);
          setActiveHero(-1);
        } else if (command === "open") {
          let newNum = parseInt(number);
          if (newNum > heroes.length) {
            alanBtn().playText(`no hero number ${newNum} please sekect again`);
          } else {
            alanBtn().playText(`Opening hero number ${newNum}`);
            window.open(heroes[newNum - 1].wiki, "_blank");
          }
        } else if (command === 'close') {
          let newNum = parseInt(number);
          console.log(typeof newNum)
          if (newNum > heroes.length) {
            alanBtn().playText(`no villain number ${newNum} please select again`);
          } else {
            alanBtn().playText(`Opening villain number ${newNum}`);
            window.open(heroes[newNum - 1].wiki, "_blank");
          }
        } 
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        {superheroes.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open hero number [5]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
      </div>
      <Herolayout heroes={superheroes} />
    </div>
  );

  // useEffect(() => {
  //   const data = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection("Superheroes").get()
  //   //   console.log(data.docs.map(doc => doc.data()))
  //     setSuperheroes(data.docs.map((doc) => doc.data()));
  //   };
  //   data()
  // }, []);

  // return (
  //   <div>
  //     <h1>The Golden Age of Superheroes</h1>
  //         {superheroes.map((superhero) => {
  //           return <li>{superhero.Home}</li>
  //         })}
  //   </div>
  // );
};

export default App;
