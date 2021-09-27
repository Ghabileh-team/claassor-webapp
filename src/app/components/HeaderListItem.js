import React, { useState } from "react";
import styled from "styled-components";
import Image from "../assets/Hajitoon.jpg";

import { ReactComponent as Ticket } from "../assets/icons/Ticket.svg";
import { ReactComponent as Logout } from "../assets/icons/Logout.svg";
import { useDispatch } from "react-redux";
import { updateCurrentWorkspace } from "../../redux/globalValuesSlice";
import { updateIsAdmin, updateIsCreator } from "../../redux/archiveSlice";

const Parse = require("parse");

const ListItem = styled.li`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
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

  const checkIsAdmin = () => {
    let query = data.relation("admins").query();
    query.equalTo("objectId", Parse.User.current().id);
    query.find().then((res) => {
      if (res.length !== 0) {
        dispatch(updateIsAdmin(true));
      }
    });
  };

  const checkIsCreator = () => {
    let creator = data.get("creator");
    if (creator.id === Parse.User.current().id) {
      dispatch(updateIsCreator(true));
    }
  };

  const changeCurrentWorkspace = () => {
    props.show(false);
    checkIsAdmin();
    checkIsCreator();
    dispatch(updateCurrentWorkspace(data));
    Parse.User.current().set("currentWorkspace", data);
    Parse.User.current().save();
  };

  return (
    <ListItem>
      <ListItemImage src={Image} />
      <CenterColumn>
        <h5>{!props.ownWorkspace ? data.get("username") : "My workspace"}</h5>
        {!props.ownWorkspace ? (
          <p>
            type: <span>{data.get("type")}</span>
          </p>
        ) : null}
        {/* <p>salaaam</p> */}
      </CenterColumn>
      <IconsColumn>
        <Ticket onClick={changeCurrentWorkspace} width="18" height="18" />
        {!props.ownWorkspace ? (
          <>
            <Logout
              onClick={handleLogout}
              stroke="red"
              width="21"
              height="21"
            />
          </>
        ) : null}
      </IconsColumn>
    </ListItem>
  );
}
