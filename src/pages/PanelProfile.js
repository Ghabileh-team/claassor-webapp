import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  PanelBigContainer,
  PanelContainer,
  PanelWindow,
  theme,
} from "../Styles";
import { ReactComponent as Plus } from "../assets/icons/Plus.svg";
import "swiper/swiper.scss";
import NotificationItem from "../components/NotificationItem";
import PanelNav from "../components/PanelNav";
import PanelHeader from "../components/PanelHeader";
import DashboardAddPopUp from "../components/Dashboard/DashboardAddPopUp";
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
export default function PanelProfile(props) {
  const [newsItems, setNewsItems] = useState([]);
  const [showAddPopUp, setShowAddPopUp] = useState(false);

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

      <PlusButton onClick={() => setShowAddPopUp(true)}>
        <Plus fill="white" width="30" />
      </PlusButton>
    </ThemeProvider>
  );
}
