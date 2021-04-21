import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import firebase from "./firebase";
import Layout from "./components/Newslayout/Layout"

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  // const [articles, setArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, heroes }) => {
        if (command === "super") {
          console.log(heroes);
          setSuperheroes(heroes);
        }
      },
      // onCommand: ({command, articles}) => {
      //   if (command === "news") {
      //     console.log(articles)
      //     setArticles(articles)
      //   }
      // }
    });
  }, []);

  return <h1>test</h1>;

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
