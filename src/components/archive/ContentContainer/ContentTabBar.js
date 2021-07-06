import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentSlider from "./ContentSlider";

const Container = styled.div`
  border-radius: 10px;
`;
const TabContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  h4 {
    margin-left: 5px;
    padding-bottom: 2px;
    color: gray;
    cursor: pointer;
    &.active {
      color: #1b164a;
      border-bottom: 1px solid #1b164a;
    }
  }
`;

export default function ContentTabBar() {
  const [tab, setTab] = useState("vid");

  return (
    <Container>
      <TabContainer>
        <h4
          onClick={() => setTab("vid")}
          className={tab === "vid" ? "active" : null}
        >
          ویدیو
        </h4>
        <h4
          onClick={() => setTab("img")}
          className={tab === "img" ? "active" : null}
        >
          عکس
        </h4>
        <h4
          onClick={() => setTab("doc")}
          className={tab === "doc" ? "active" : null}
        >
          فایل
        </h4>
      </TabContainer>
      <ContentSlider tab={tab} />
    </Container>
  );
}
