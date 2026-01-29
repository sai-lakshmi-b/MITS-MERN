import React from "react";
import Contacts from "./pages/Contacts";

const About = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <Contacts name={props.name} />
    </div>
  );
};

export default About;