import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PanelBox } from "src/styles/components";
import claassorLogo from "src/assets/2.png";
import { ReactComponent as Triangle } from "src/assets/icons/triangle.svg";
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

  return (
    <PanelHeaderContainer>
      <HeaderLogo src={claassorLogo} />
      <UserSection>
        <div>
          <h1>{user.get("firstName") + " " + user.get("lastName")}</h1>
          <p onClick={() => setShowDropDown(!showDropDown)}>
            <Triangle /> انتخاب گروه آموزشی
          </p>
          {showDropDown ? <HeaderDropDown show={setShowDropDown} /> : null}
        </div>
        <UserProfileImage src={user.get("image")?.url()} alt="useIcon" />
      </UserSection>
    </PanelHeaderContainer>
  );
}
