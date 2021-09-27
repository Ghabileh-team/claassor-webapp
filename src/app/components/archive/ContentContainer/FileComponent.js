import React from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { ReactComponent as FileIcon } from "../../../assets/icons/FileDownload.svg";
const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1vw;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
`;
export default function Filecomponent({ url }) {
  return (
    <Container>
      <FileIcon />
    </Container>
  );
}
