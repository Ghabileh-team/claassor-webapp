import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  PanelBigContainer,
  PanelContainer,
  PanelWindow,
  theme,
} from "../../Styles";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import "swiper/swiper.scss";
import NotificationItem from "../../components/NotificationItem";
import PanelNav from "../../components/PanelNav";
import PanelHeader from "../../components/PanelHeader";
import DashboardAddPopUp from "../../components/Dashboard/DashboardAddPopUp";
import { Route, useRouteMatch } from "react-router";
import PanelNotificaions from "../PanelNotifications";
import PanelDashboard from "../PanelDashboard";
import PanelArchive from "../PanelArchive";
import PanelBookmarks from "../PanelBookmarks";
import PanelProfile from "../PanelProfile";
import { useSelector } from "react-redux";
import {
  selectShowPopup,
  selectShowPopupArchive,
} from "../../redux/globalValuesSlice";

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
export default function PanelMain(props) {
  const [newsItems, setNewsItems] = useState([]);
  const { path, url } = useRouteMatch();
  const showAddPopup = useSelector(selectShowPopup);
  const showAddPopupArchive = useSelector(selectShowPopupArchive);

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
      {showAddPopup ? <DashboardAddPopUp primary /> : null}
      {showAddPopupArchive ? <DashboardAddPopUp /> : null}

      <PanelWindow blur={showAddPopup || showAddPopupArchive}>
        <PanelHeader />
        <PanelBigContainer>
          <Route path={`${path}/notifications`}>
            <PanelNotificaions />
          </Route>
          <Route path={`${path}/archive`}>
            <PanelArchive />
          </Route>
          <Route path={`${path}/bookmarks`}>
            <PanelBookmarks />
          </Route>
          <Route path={`${path}/profile`}>
            <PanelProfile />
          </Route>
          <Route exact path={`${path}` || `${path}/dashboard`}>
            <PanelDashboard />
          </Route>

          <PanelNav profile />
        </PanelBigContainer>
      </PanelWindow>
    </ThemeProvider>
  );
}
