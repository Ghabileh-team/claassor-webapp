import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { ReactComponent as Pause } from "../assets/icons/Pause.svg";
import { ReactComponent as Play } from "../assets/icons/Play.svg";
import { ReactComponent as Stop } from "../assets/icons/Stop.svg";

const Container = styled.div`
  background-color: #92bfc5;
  height: fit-content;
  width: fit-content;
  border-radius: 20px;
  margin: 0 1vw;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Top = styled.div`
  text-align: right;
  color: white;
  font-family: "dana-regular";
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
    margin-left: 5px;
  }
`;
const Center = styled.div`
  text-align: right;
  p {
    font-size: 3em;
    color: white;
    text-align: center;
  }
`;
const Bottom = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-around;
  padding: 0 10%;
`;
const IconContainer = styled.div`
  border-radius: 50%;
  background-color: white;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export default function StopWatch() {
  const [isPublic, setIsPublic] = useState(false);
  return (
    <Container>
      <Top>
        <h3>کرنومتر کلاسور</h3>
        <SwitchContainer>
          <Switch
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={(e) => setIsPublic(e)}
            checked={isPublic}
            height={20}
            width={40}
            handleDiameter={20}
            onColor="#1B164A"
          />
          <p>نمایش تحصیل شما برای دیگران</p>
        </SwitchContainer>
      </Top>
      <Center>
        <p>03:56</p>
      </Center>
      <Bottom>
        <IconContainer>
          <Play />
        </IconContainer>
        <IconContainer>
          <Pause />
        </IconContainer>
        <IconContainer>
          <Stop stroke="black" strokeWidth="3px" fill="none" />
        </IconContainer>
      </Bottom>
    </Container>
  );
}
