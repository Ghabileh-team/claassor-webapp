import React, { useState } from "react";
import styled from "styled-components";
import Image from "../assets/Hajitoon.jpg";

import { ReactComponent as Ticket } from "../assets/icons/Ticket.svg";
import { ReactComponent as Logout } from "../assets/icons/Logout.svg";
import { useDispatch } from "react-redux";
import { updateCurrentWorkspace } from "../redux/globalValuesSlice";

const Parse = require("parse");

const ListItem = styled.li`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: space-around;
  transform: translateX(-50%);

  /* grid-template-columns: 1fr 3fr 1fr;
  grid-column-: 10px; */
  box-shadow: 0px 0px 5px #6f6f6f;
  padding: 1vw;
`;

const ListItemImage = styled.img`
  border-radius: 10px;
  width: 4vw;
  height: 4vw;
  object-fit: cover;
  object-position: 0 1px;
  place-self: center;
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 100px;
  margin: 0 20px;
  p {
    color: gray;
    span {
      color: black;
    }
  }
`;
const IconsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export default function HeaderListItem(props) {
  const [data, setData] = useState(props.object);
  const dispatch = useDispatch();
  const handleLogout = () => {
    Parse.User.current().relation("workspaces").remove(data);

    Parse.User.current()
      .save()
      .then((res) => {
        alert("deleted");
      });
  };

  const changeLocalCurrentWorkspace = () => {
    dispatch(updateCurrentWorkspace(data));
  };

  return (
    <ListItem>
      <ListItemImage src={Image} />
      <CenterColumn>
        <h5>{data.get("username")}</h5>
        <p>
          type: <span>{data.get("type")}</span>
        </p>
        <p>salaaam</p>
      </CenterColumn>
      <IconsColumn>
        <Ticket onClick={changeLocalCurrentWorkspace} width="18" height="18" />
        <Logout onClick={handleLogout} stroke="red" width="21" height="21" />
      </IconsColumn>
    </ListItem>
  );
}
