import React, { useState } from "react";
import styled from "styled-components";
import userIcon from "../../assets/Hajitoon.jpg";
import { PanelBox, StyledLink } from "../../Styles";
import { ReactComponent as Ticket } from "../../assets/icons/Ticket.svg";

import { ReactComponent as Logout } from "../../assets/icons/Logout.svg";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateWorkspace } from "../../redux/archiveSlice";
const Parse = require("parse");

const Container = styled(PanelBox)`
  padding: 0;
  display: grid;
  /* margin-right: 1vw; */
  margin-bottom: 1vw;
  margin-left: 1vw;
  grid-template-rows: 1fr;
  width: fit-content;
  border-radius: 15px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
`;

const Bottom = styled.div`
  margin: 10px;
`;

const SenderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SenderTextContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-left: 10px;
  text-align: left;
  h5 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: gray;

    span {
      color: ${(props) => props.theme.main};
    }
  }
`;

const SenderImage = styled.img`
  border-radius: 10px;
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: 0 1px;
`;

const IconsContainer = styled.div`
  display: flex;
  margin-top: 6vh;
  justify-content: flex-end;
  align-items: center;
`;

const Top = styled.div`
  border-radius: 15px 15px 0 0;
  height: 15vh;
  background-color: #c4c4c4;
`;
export default function ArchiveItem(props) {
  const [object, setObject] = useState(props.object);
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    Parse.User.current().relation("workspaces").remove(object);

    Parse.User.current()
      .save()
      .then((res) => {
        alert("deleted");
      });
  };

  const ticketClick = () => {
    dispatch(updateWorkspace(object.id));

    history.push(`${url}/workspace`);
  };
  return (
    <Container>
      <Top />
      <Bottom>
        <SenderContainer>
          <SenderImage src={object.get("image")?.url()} />
          <SenderTextContainer>
            <h5>{object.get("firstName")}</h5>
            <p>
              type: <span>public</span>
            </p>
            <p>@{object.get("username")}</p>
          </SenderTextContainer>
        </SenderContainer>
        <IconsContainer>
          {/* <StyledLink to={`${url}/workspace`}> */}
          <Ticket
            cursor="pointer"
            style={{ marginLeft: 5 }}
            width="18px"
            stroke="#ff0000"
            onClick={ticketClick}
          />
          {/* </StyledLink> */}

          <Logout
            style={{ marginLeft: 5 }}
            stroke="red"
            cursor="pointer"
            width="18px"
            onClick={handleLogout}
          />
        </IconsContainer>
      </Bottom>
    </Container>
  );
}
