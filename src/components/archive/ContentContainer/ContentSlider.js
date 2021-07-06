import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { selectArchiveSession } from "../../../redux/archiveSlice";
import LoadingIndicator from "../../LoadingIndicator";
import Filecomponent from "./FileComponent";
import VideoComponent from "./VideoComponent";
import ImageComponent from "./ImageComponent";
import { Session } from "parse";
const Parse = require("parse");
export default function ContentSlider(props) {
  const [imageUrls, setImageUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [filesUrls, setFilesUrls] = useState([]);
  const sessionId = useSelector(selectArchiveSession);

  const fetchImages = (obj) => {
    const filesQuery = obj.relation("files").query();

    filesQuery.equalTo("type", "png");
    filesQuery.find().then((res) => {
      console.log(res);

      let urls = [];
      res.forEach((obj) => {
        urls.push(obj.get("file").url());
      });
      setImageUrls(urls);
    });
  };

  const fetchVideos = (obj) => {
    const filesQuery = obj.relation("files").query();

    filesQuery.equalTo("type", "vid");
    trackPromise(
      filesQuery.find().then((res) => {
        let urls = [];
        console.log(res);
        res.forEach((obj) => {
          urls.push(obj.get("file").url());
        });
        setVideoUrls(urls);
      })
    );
  };

  const fetchFiles = (obj) => {
    const filesQuery = obj.relation("files").query();

    filesQuery.equalTo("type", "file");
    trackPromise(
      filesQuery.find().then((res) => {
        let urls = [];
        console.log(res);
        res.forEach((obj) => {
          urls.push(obj.get("file").url());
        });
        setFilesUrls(urls);
      })
    );
  };

  useEffect(() => {
    const Sessions = Parse.Object.extend("Sessions");
    const query = new Parse.Query(Sessions);
    query.equalTo("objectId", sessionId);
    query.first().then((obj) => {
      fetchImages(obj);
      fetchVideos(obj);
      fetchFiles(obj);
    });
  }, []);

  return (
    <Swiper
      style={{ padding: "20px" }}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
    >
      {props.tab === "img"
        ? imageUrls.map((url) => {
            return (
              <SwiperSlide>
                <ImageComponent url={url} />
              </SwiperSlide>
            );
          })
        : props.tab === "vid"
        ? videoUrls.map((url) => {
            return (
              <SwiperSlide>
                <VideoComponent url={url} />
              </SwiperSlide>
            );
          })
        : videoUrls.map((url) => {
            return (
              <SwiperSlide>
                <Filecomponent url={url} />
              </SwiperSlide>
            );
          })}
      {/* <LoadingIndicator /> */}
    </Swiper>
  );
}
