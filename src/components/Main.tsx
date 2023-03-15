import React from "react";
import Hero from "./Hero";
import "./Main.css";
import NavigationBar from "./NavigationBar";

export default function Main() {
  return (
    <div className="Main">
      <NavigationBar></NavigationBar>
      <Hero></Hero>
    </div>
  );
}
