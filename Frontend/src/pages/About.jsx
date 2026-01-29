import React from "react";
import Contacts from "./contacts";

const About = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <Contacts name={props.name} />
    </div>
  );
};

export default About;