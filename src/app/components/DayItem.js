import React from "react";
import styled from "styled-components";
import userProfile from "../assets/Hajitoon.jpg";
const Container = styled.div`
  position: relative;
  background-color: ${(props) => (props.active ? "#92BFC5" : props.theme.main)};
  width: fit-content;
  height: 30vh;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 1vw;
  @media screen and (max-width: 1024px) {
    position: relative;
    background-color: ${(props) =>
      props.active ? "#92BFC5" : props.theme.main};
    height: 30vh;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: ${(props) => (props.big ? "12vw" : props.medium ? "9vw" : "6vw")};
  height: ${(props) => (props.big ? "12vw" : props.medium ? "9vw" : "6vw")};
  border-radius: 50%;
  border: solid 15px ${(props) => (props.active ? "#B4CBB2" : "#373363")};
  bottom: ${(props) => (props.big ? "-50%" : props.medium ? "5%" : "75%")};
  left: ${(props) => (props.big ? "-65%" : props.medium ? "70%" : "30%")};
  margin: 0;

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.big ? "12vw" : props.medium ? "9vw" : "6vw")};
    height: ${(props) => (props.big ? "12vw" : props.medium ? "9vw" : "6vw")};
    border-radius: 50%;
    border: solid 10px
      ${(props) => (props.active ? "#B4CBB2" : props.theme.second)};
    bottom: ${(props) => (props.big ? "-35%" : props.medium ? "5%" : "75%")};
    left: ${(props) => (props.big ? "-65%" : props.medium ? "70%" : "30%")};
  }

  @media screen and (max-width: 400px) {
    width: ${(props) => (props.big ? "12vw" : props.medium ? "9vw" : "6vw")};
    height: ${(props) => (props.big ? "12vw" : props.medium ? "9vw" : "6vw")};
    border-radius: 50%;
    border: solid 10px
      ${(props) => (props.active ? "#B4CBB2" : props.theme.second)};
    bottom: ${(props) => (props.big ? "0%" : props.medium ? "5%" : "75%")};
    left: ${(props) => (props.big ? "-65%" : props.medium ? "70%" : "30%")};
  }
`;

const ProfileImg = styled.img`
  border-radius: 5px;
  width: 2.5vw;
  height: 2.5vw;
  object-fit: cover;
`;
const Top = styled.div`
  flex: 1;
  position: relative;
  color: white;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 3fr;
  text-align: right;
  z-index: 2;

  h5 {
    width: 100%;
    font-size: 9px;
  }
  p {
    font-size: 8px;
  }
`;

const Center = styled.div`
  flex: 3;
  z-index: 2;
  margin: 5px 0;
  color: white;
  overflow: hidden;
  h6 {
    font-size: 8px;
    font-family: "dana-regular";
  }
  p {
    font-size: 8px;
  }
  max-height: 50%;
`;

const Bottom = styled.div`
  flex: 1;
  color: white;
  z-index: 2;
  text-align: center;
  h6 {
    font-size: 8px;
  }
  p {
    font-size: 8px;
  }
`;
export default function DayItem(props) {
  return (
    <Container active={props.active}>
      <Circle big active={props.active}></Circle>
      <Circle medium active={props.active}></Circle>
      <Circle active={props.active}></Circle>
      <Top>
        <ProfileImg src={userProfile} />
        <div>
          <h5>{props.object.tname}</h5>
          <p>@simpleId</p>
        </div>
      </Top>
      <Center>
        <h6>توضیحات رویداد</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iste
          dolor, libero pariatur voluptates minus
        </p>
      </Center>
      <Bottom>
        <h6>{props.object.time}</h6>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => window.open(props.object.link, "_blank")}
        >
          ورود به رویداد
        </p>
      </Bottom>
    </Container>
  );
}
