import React, { useEffect, useState } from "react";
import styled from "styled-components";

import HeaderListItem from "./HeaderListItem";
const Parse = require("parse");

const Container = styled.div`
  position: absolute;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 20px;
  transition: ease-in 0.2s;
`;

const List = styled.ul`
  list-style: none;
  background-color: white;
  padding: 1vw;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #6f6f6f;
`;

export default function HeaderDropDown() {
  const [workspaces, setWorkspaces] = useState([]);
  const workspacesQuery = Parse.User.current().relation("workspaces").query();

  const getWorkspaces = () => {
    workspacesQuery.find().then((res) => {
      let items = [];
      res.forEach((w) => {
        items.push(<HeaderListItem object={w} />);
      });
      items.push(
        <HeaderListItem object={Parse.User.current()} ownWorkspace={true} />
      );
      setWorkspaces(items);
    });
  };

  useEffect(() => {
    getWorkspaces();
  }, []);
  return (
    <Container>
      <List>{workspaces}</List>
    </Container>
  );
}
