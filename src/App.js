import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import firebase from "./firebase";
import Herolayout from "./components/Herolayout/Herolayout";
// import wordsToNumbers from "words-to-numbers";

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, heroes, number }) => {
        if (command === "super") {
          console.log(heroes);
          setSuperheroes(heroes);
        } else if (command === "open") {
          let newNum = parseInt(number);
          console.log(typeof newNum);
          // console.log(typeof (number))
          console.log(heroes);
          window.open(heroes[newNum].wiki, "_blank");
        }
      },
    });
  }, []);

  return (
    <div>
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
