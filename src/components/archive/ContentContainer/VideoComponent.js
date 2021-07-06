import React from "react";
import { SwiperSlide } from "swiper/react";

export default function VideoComponent({ url }) {
  return (
    <>
      <video src={url} controls></video>
    </>
  );
}
