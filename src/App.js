import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import firebase from "./firebase";
import Herolayout from "./components/Herolayout/Herolayout";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import wordsToNumbers from "words-to-numbers";

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [activeHero, setActiveHero] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, heroes, number }) => {
        if (command === "super") {
          setSuperheroes(heroes);
          setActiveHero(-1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const hero = heroes[parsedNumber - 1];
          if (parsedNumber > heroes.length) {
            alanBtn().playText("Please try that again...");
          } else if (hero) {
            window.open(hero.wiki, "_blank");
            alanBtn().playText(`opening hero number ${parsedNumber}`);
          } else {
            alanBtn().playText(
              `I'm sorry, hero number ${parsedNumber} does not exist`
            );
          }
        } else if (command === "close") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const hero = heroes[parsedNumber - 1];
          if (parsedNumber > heroes.length) {
            alanBtn().playText(
              `I'm sorry, villain number ${parsedNumber} does not exist`
            );
          } else if (hero) {
            window.open(hero.wiki, "_blank");
            alanBtn().playText(`opening villain number ${parsedNumber}`);
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
                Jarvis, Go back
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
