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

const Container = styled.div`
  flex: 2;
  margin-right: 2vw;
`;

const UserData = styled.div`
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  padding: 1vw;
  margin-top: 2vw;
`;

const Workspaces = styled.div`
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  padding: 1vw;
  margin-top: 2vw;
`;
export default function PanelProfile(props) {
  const [newsItems, setNewsItems] = useState([]);
  const [showAddPopUp, setShowAddPopUp] = useState(false);

  const fetchNews = () => {
    const News = Parse.Object.extend("News");
    const query = new Parse.Query(News);
    query.descending("createdAt");
    query.equalTo("sender", Parse.User.current());
    query.find().then((res) => {
      const items = [];
      res.forEach((n) => {
        items.push(<NotificationItem object={n} big isBig={true} />);
      });
      setNewsItems(items);
    });
  };

  const fetchWorkspaces = () => {
    const query = new Parse.Query(Parse.User);
    query.equalTo("type", "host");
    query.equalTo("creator", Parse.User.current());
    query.find().then((res) => {});
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {showAddPopUp ? <DashboardAddPopUp popup={setShowAddPopUp} /> : null}

      <NotificationsContainer style={{ flex: 3 }}>
        {newsItems}
      </NotificationsContainer>
      <Container>
        <UserData>
          <p>asdfas</p>
        </UserData>
        <Workspaces></Workspaces>
      </Container>
      <PlusButton onClick={() => setShowAddPopUp(true)}>
        <Plus fill="white" width="30" />
      </PlusButton>
    </ThemeProvider>
  );
}
