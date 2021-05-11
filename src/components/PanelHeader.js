import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PanelBox } from "../Styles";
import claassorLogo from "../assets/2.png";
import { ReactComponent as Triangle } from "../assets/icons/triangle.svg";
import HeaderDropDown from "./HeaderDropDown";
import HeaderListItem from "./HeaderListItem";
const PanelHeaderContainer = styled(PanelBox)`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  margin: auto;
  border-radius: 20px;
  height: 15vh;
  justify-content: space-between;
  padding: 1vw 3vw;
`;
const HeaderLogo = styled.img`
  width: 12vw;
  object-fit: contain;
`;
const UserSection = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "dana-regular";
    font-size: 1.2em;
  }
  p {
    color: gray;
    font-size: 12px;
    cursor: pointer;
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 0.9em;
    }
  }
`;

const UserProfileImage = styled.img`
  border-radius: 50%;
  width: 5.5vw;
  height: 5.5vw;
  object-fit: cover;
  margin: 1vw;

  @media screen and (max-width: 400px) {
    img {
      border-radius: 50%;
      width: 12vw;
      height: 12vw;
      object-fit: cover;
      margin: 1vw;
    }
  }
`;
const Parse = require("parse");

export default function PanelHeader() {
  const [user, setUser] = useState(Parse.User.current());
  const [showDropDown, setShowDropDown] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const workspacesQuery = Parse.User.current().relation("workspaces").query();

  const getWorkspaces = () => {
    workspacesQuery.find().then((res) => {
      let items = [];
      res.forEach((w) => {
        items.push(<HeaderListItem object={w} />);
      });
      setWorkspaces(items);
    });
  };

  useEffect(() => {
    getWorkspaces();
  }, []);
  return (
    <PanelHeaderContainer>
      <HeaderLogo src={claassorLogo} />
      <UserSection>
        <div>
          <h1>{user.get("firstName") + " " + user.get("lastName")}</h1>
          <p onClick={() => setShowDropDown(!showDropDown)}>
            <Triangle /> انتخاب گروه آموزشی
          </p>
          {showDropDown ? workspaces : null}
        </div>
        <UserProfileImage src={user.get("image")?.url()} alt="useIcon" />
      </UserSection>
    </PanelHeaderContainer>
  );
}