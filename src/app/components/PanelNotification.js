import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PanelBox } from "../../styles/components";
import NotificationItem from "./NotificationItem";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import LoadingIndicator from "./LoadingIndicator";
import { trackPromise } from "react-promise-tracker";

const Parse = require("parse");
export default function PanelNotification(props) {
  const [newsItems, setNewsItems] = useState([]);

  const isBig = props.big;
  const NotificationContainer = styled(SimpleBar)`
    height: 50vh;
    overflow: hidden;
    margin-bottom: 3vh;
    width: ${isBig ? "70%" : null};
    margin: ${isBig ? "auto" : null};
    padding: ${isBig ? null : "10px"};
    background-color: ${isBig ? null : "white"};
    border-radius: 20px;
    text-align: right;
    overflow-y: scroll;
  `;

  const fetchNews = () => {
    const News = Parse.Object.extend("News");
    const query = new Parse.Query(News);
    props.workspace && query.equalTo("workspace", props.workspace);
    query.limit(3);
    query.descending("createdAt");
    trackPromise(
      query.find().then((res) => {
        const items = [];
        res.forEach((n) => {
          items.push(<NotificationItem object={n} />);
        });
        setNewsItems(items);
      })
    );
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NotificationContainer>
      آخرین اخبار
      <LoadingIndicator /> {newsItems}
    </NotificationContainer>
  );
}
