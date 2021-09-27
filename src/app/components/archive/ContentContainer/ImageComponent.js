import React from "react";
import { SwiperSlide } from "swiper/react";

export default function ImageComponent({ url }) {
  return (
    <>
      <img src={url} alt="img" />
    </>
  );
}
