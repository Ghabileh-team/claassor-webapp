import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff8a7;
  width: 18vw;
  height: 18vw;
  text-align: right;
  padding: 10px;
  box-shadow: 0px 0px 15px gray;

  h4 {
  }

  p {
    font-size: 0.8em;
  }
`;
export default function NoteItem(props) {
  const note = props.object;
  return (
    <Container>
      <h4>{note?.get("title")}</h4>
      <p>{note?.get("description")}</p>
    </Container>
  );
}
