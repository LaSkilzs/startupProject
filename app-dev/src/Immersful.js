import React from "react";
import { Route } from "react-router-dom";

const Immersful = () => {
  return (
    <Route
      path="/immersful"
      component={() => {
        window.location.href = "https://immersful-video.appspot.com/demos/";
        return null;
      }}
    />
  );
};

export default Immersful;
