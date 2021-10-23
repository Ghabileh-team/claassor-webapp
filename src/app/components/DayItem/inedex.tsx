import React from "react";
import styled from "styled-components";
import userProfile from "src/assets/Hajitoon.jpg";
import { Circle, Container, ProfileImg, Top } from "./styles";
import { JsxElement } from "typescript";

interface Props {
  active: boolean;
  object: {
    tname: string;
    time: string;
  };
}
export default function DayItem({ active, object }: Props) {
  return (
    <Container active={active}>
      <Circle big active={active} />
      <Circle medium active={active} />
      <Circle active={active} />
      <Top>
        <ProfileImg src={userProfile} />
        <div>
          <h5>{object.tname}</h5>
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
        <h6>{object.time}</h6>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => window.open(object.link, "_blank")}
        >
          ورود به رویداد
        </p>
      </Bottom>
    </Container>
  );
}
