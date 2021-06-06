import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PanelHeader from "../components/PanelHeader";
import PanelNav from "../components/PanelNav";
import {
  PanelBigContainer,
  PanelContainer,
  PanelWindow,
  theme,
} from "../Styles";
import { ReactComponent as BookmarkIcon } from "../assets/icons/Bookmark.svg";
import NotificationItem from "../components/NotificationItem";
import { Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Chapters from "../components/archive/ArchiveLesson/Chapters";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "../components/LoadingIndicator";
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 2vw;
`;

const BookmarkCategoryContainer = styled.div`
  background-color: white;
  cursor: pointer;
  padding: 1vw 2vw;
  margin-left: 1vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10vw;
  text-decoration: none;

  h5 {
    color: ${(props) => props.theme.main};
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
`;

const NotificationsContainer = styled(PanelContainer)`
  flex-direction: column;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.main};
`;

const Parse = require("parse");

export default function PanelBookmarks() {
  const [newsItems, setNewsItems] = useState([]);
  const { path, url } = useRouteMatch();
  const fetchNews = () => {
    const query = new Parse.User.current().relation("savedNews").query();
    query.descending("createdAt");
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
      <Route path={`${path}/notifications`}>
        <NotificationsContainer>
          <LoadingIndicator />
          {newsItems}
        </NotificationsContainer>
      </Route>
      <Route path={`${path}/archives`}>
        {/* <ArchiveWrapper></ArchiveWrapper> */}
        <PanelContainer>
          <Chapters step="saved" />
        </PanelContainer>
      </Route>
      <Route exact path={path}>
        <PanelContainer>
          <Container>
            <LinkWrapper to={`${url}/notifications`}>
              <BookmarkCategoryContainer>
                <BookmarkIcon stroke="#1B164A" width="80" />
                <h5>اعلانات</h5>
              </BookmarkCategoryContainer>
            </LinkWrapper>

            <LinkWrapper to={`${url}/archives`}>
              <BookmarkCategoryContainer>
                <BookmarkIcon stroke="#1B164A" width="80" />
                <h5>آرشیو</h5>
              </BookmarkCategoryContainer>
            </LinkWrapper>
          </Container>
        </PanelContainer>
      </Route>
    </ThemeProvider>
  );
}
