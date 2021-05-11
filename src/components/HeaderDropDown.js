import React from "react";
import styled from "styled-components";

import HeaderListItem from "./HeaderListItem";

const Container = styled.div`
  position: absolute;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 20px;
  display: flex;
  transition: ease-in 0.2s;
`;

const List = styled.ul`
  list-style: none;
  background-color: white;
  padding: 1vw;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #6f6f6f;
`;
const ListItem = styled.li`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  /* grid-template-columns: 1fr 3fr 1fr;
  grid-column-: 10px; */
  box-shadow: 0px 0px 5px #6f6f6f;
  padding: 1vw;
`;

export default function HeaderDropDown() {
  return (
    <Container>
      <List>
        <HeaderListItem />
      </List>
    </Container>
  );
}
