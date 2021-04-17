import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import firebase from "./firebase";

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
      alanBtn({
          key: alanKey,
          onCommand: ({command}) => {
              if(command === "testcommand"){
                alert("hello")
              }
          }
      })
  }, [])

  useEffect(() => {
    const data = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Superheroes").get()
    //   console.log(data.docs.map(doc => doc.data()))
      setSuperheroes(data.docs.map((doc) => doc.data()));
    };
    data()
  }, []);

  return (
    <div>
      <h1>The Golden Age of Superheroes</h1>
      {
        <h1>
          {superheroes.map((superhero) => {
            return superhero.Home;
          })}
        </h1>
      }
    </div>
  );
};

export default App;
