import React, { useEffect, useState, ReactElement } from "react";
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

interface Props {
  show: boolean | undefined;
}
export default function HeaderDropDown(props: Props) : ReactElement {
  const [workspaces, setWorkspaces] = useState<any>([]);
  const workspacesQuery = Parse.User.current().relation("workspaces").query();

  const getWorkspaces = ():void => {
    workspacesQuery.find().then((res :any) => {
      const items = [];
      res.forEach((w:any) => {
        items.push(<HeaderListItem show={props.show} object={w} />);
      });
      items.push(
        <HeaderListItem
          show={props.show}
          object={Parse.User.current()}
          ownWorkspace
        />,
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
