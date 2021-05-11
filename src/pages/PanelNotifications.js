import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { PanelContainer, theme } from "../Styles";
import { ReactComponent as Plus } from "../assets/icons/Plus.svg";
import "swiper/swiper.scss";
import NotificationItem from "../components/NotificationItem";

import DashboardAddPopUp from "../components/Dashboard/DashboardAddPopUp";
import { selectWorkspace, updateWorkspace } from "../redux/archiveSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentWorkspace } from "../redux/globalValuesSlice";
const Parse = require("parse");

const NotificationsContainer = styled(PanelContainer)`
  flex-direction: column;
`;

const PlusButton = styled.div`
  background-color: #1b164a;
  display: grid;
  place-items: center;
  border-radius: 50%;
  width: 4vw;
  height: 4vw;
  position: fixed;
  bottom: 8%;
  left: 5%;
  cursor: pointer;
`;
export default function PanelNotificaions(props) {
  const [newsItems, setNewsItems] = useState([]);
  const [showAddPopUp, setShowAddPopUp] = useState(true);
  const dispatch = useDispatch();
  const count = useSelector(selectCurrentWorkspace);

  const fetchNews = () => {
    const News = Parse.Object.extend("News");
    const query = new Parse.Query(News);
    query.descending("createdAt");

    query.find().then((res) => {
      const items = [];
      res.forEach((n) => {
        items.push(<NotificationItem object={n} big isBig={true} />);
      });
      setNewsItems(items);
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {showAddPopUp ? <DashboardAddPopUp popup={setShowAddPopUp} /> : null}
      <NotificationsContainer>{newsItems}</NotificationsContainer>

      <PlusButton
        onClick={() => {
          setShowAddPopUp(true);
        }}
      >
        <Plus fill="white" width="30" />
      </PlusButton>
    </ThemeProvider>
  );
}
