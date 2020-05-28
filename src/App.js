import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Rooms from "./Components/Rooms";
import SingleRoom from "./Components/SingleRoom";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
}

export default App;
