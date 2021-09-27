import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
  width: 100%;
  font-family: "dana-regular";
  label {
    margin-top: 5px;
  }

  @media screen and (max-width: 400px) {
    label {
      font-size: 0.5em;
    }
  }
`;

const Checkbox = styled.input`
  margin-left: 5px;
  min-width: 18px;
  min-height: 18px;
  border: solid #bebec4 1px;
  border-radius: 3px;
  outline: none;
  display: inline;

  @media screen and (max-width: 400px) {
    margin-left: 5px;
    min-width: 10px;
    min-height: 10px;
    border: solid #bebec4 1px;
    border-radius: 3px;
  }
`;
const Parse = require("parse");

export default function PanelTask(props) {
  const [done, setDone] = useState(props.object.get("done"));

  const doneFunction = () => {
    const Tasks = Parse.Object.extend("Tasks");
    const query = new Parse.Query(Tasks);
    query.get(props.object.id).then((task) => {
      task.set("done", !done);
      task.save().then((res) => {
        setDone(!done);
      });
    });
  };

  return (
    <Container>
      <label htmlFor={props.label}>{props.label}</label>
      <Checkbox
        onClick={doneFunction}
        id={props.label}
        type="checkbox"
        checked={done}
      />
    </Container>
  );
}
