import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { PanelContainer, theme } from "../Styles";
import { ReactComponent as Plus } from "../assets/icons/Plus.svg";
import "swiper/swiper.scss";
import NotificationItem from "../components/NotificationItem";
import DashboardAddPopUp from "../components/Dashboard/DashboardAddPopUp";
import {
  selectIsAdmin,
  selectIsCreator,
  selectWorkspace,
  updateWorkspace,
} from "../redux/archiveSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentWorkspace } from "../redux/globalValuesSlice";
import LoadingIndicator from "../components/LoadingIndicator";
import { trackPromise } from "react-promise-tracker";
const Parse = require("parse");

const NotificationsContainer = styled(PanelContainer)`
  flex-direction: column;
  text-align: center;
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
  const [currentWorkspace] = useState(useSelector(selectCurrentWorkspace));
  // const [showAddPopUp, setShowAddPopUp] = useState(true);
  const isAdmin = useSelector(selectIsAdmin);
  const isCreator = useSelector(selectIsCreator);
  const dispatch = useDispatch();
  // if(currentWorkspace !== )
  const fetchNews = () => {
    console.log(currentWorkspace);
    const News = Parse.Object.extend("News");
    const query = new Parse.Query(News);
    query.descending("createdAt");
    if (currentWorkspace !== Parse.User.current()) {
      query.equalTo("workspaces", currentWorkspace);
    }
    trackPromise(
      query.find().then((res) => {
        const items = [];
        res.forEach((n) => {
          items.push(<NotificationItem object={n} big isBig={true} />);
        });
        setNewsItems(items);
      })
    );
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* {showAddPopUp ? <DashboardAddPopUp popup={setShowAddPopUp} /> : null} */}
      <NotificationsContainer>
        <LoadingIndicator />
        {newsItems}
      </NotificationsContainer>

      {isCreator || isAdmin ? (
        <PlusButton
          onClick={() => {
            props.popup(true);
          }}
        >
          <Plus fill="white" width="30" />
        </PlusButton>
      ) : null}
    </ThemeProvider>
  );
}
