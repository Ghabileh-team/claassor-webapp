import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import hajitoon from "src/assets/Hajitoon.jpg";
import { ReactComponent as Notification } from "src/assets/icons/Notification.svg";
import { ReactComponent as Users } from "src/assets/icons/Users.svg";
import { ReactComponent as Ticket } from "src/assets/icons/Ticket.svg";
import { ReactComponent as Edit } from "src/assets/icons/Edit.svg";
import { ReactComponent as Arrow } from "src/assets/icons/Arrow.svg";

import { useSelector } from "react-redux";
import { selectIsAdmin, selectIsCreator } from "../../../../redux/archiveSlice";
import ContainerTop from "./ContainerTop";
import ContentTabBar from "./ContentTabBar";
const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 2vw;
  margin-right: 2vw;
`;

export default function ContentContainer() {
  const { url, path } = useRouteMatch();
  const isAdmin = useSelector(selectIsAdmin);
  const isCreator = useSelector(selectIsCreator);
  return (
    <Container>
      <ContainerTop />

      <ContentTabBar />
    </Container>
  );
}
