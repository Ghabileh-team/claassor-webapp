import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import ArchiveBoxComponent from "./ArchiveLesson/ArchiveBoxComponent";
import ArchiveWorkspaceItem from "./ArchiveWorkspaceItem";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Requests = styled.div`
  text-align: right;
  margin-top: 1vw;
`;

const Users = styled(SimpleBar)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: 1vw;
  overflow-x: visible;
  height: 30vh;
  padding-right: 10px;
  scrollbar-arrow-color: white;
`;

export default function ArchiveUsers() {
  return (
    <Container>
      <h5> درخواست ها</h5>

      <Requests>
        <Swiper spaceBetween={30} slidesPerView={3}>
          <SwiperSlide>
            <ArchiveWorkspaceItem users />
          </SwiperSlide>
          <SwiperSlide>
            <ArchiveWorkspaceItem users />
          </SwiperSlide>
          <SwiperSlide>
            <ArchiveWorkspaceItem users />
          </SwiperSlide>
          <SwiperSlide>
            <ArchiveWorkspaceItem users />
          </SwiperSlide>
        </Swiper>
      </Requests>
      <h5>اعضا</h5>
      <Users>
        <ArchiveBoxComponent user />
        <ArchiveBoxComponent user />

        <ArchiveBoxComponent user />

        <ArchiveBoxComponent user />
      </Users>
    </Container>
  );
}
