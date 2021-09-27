import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PanelBigContainer,
  PanelContainer,
  PanelWindow,
} from "../../styles/components";
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

  h4 {
    text-align: right;
    color: #1b164a;
  }
`;

const WorkspaceItem = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  margin-top: 10px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1vw;
  img {
    width: 80px;
    border-radius: 5px;
  }
`;

const WorkspaceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  margin-top: 10px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1vw;
  justify-content: space-between;

  h5 {
    display: flex;
    flex-direction: column;
    span {
      color: gray;
    }
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    object-fit: cover;
  }
`;
export default function PanelProfile(props) {
  const [newsItems, setNewsItems] = useState([]);
  const [showAddPopUp, setShowAddPopUp] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
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
    query.find().then((res) => {
      let items = [];

      res.forEach((i) => {
        i.get("creator").fetch();
        items.push(
          <WorkspaceItem>
            <img src={i.get("image").url()} alt={i.get("firstName")} />
            <WorkspaceTextContainer>
              <h5>{i.get("firstName") + " " + i.get("lastName")}</h5>
              <p>
                {i.get("creator").get("firstName") +
                  " " +
                  i.get("creator").get("lastName")}
              </p>
            </WorkspaceTextContainer>
          </WorkspaceItem>
        );
      });

      setWorkspaces(items);
    });
  };

  useEffect(() => {
    fetchNews();
    fetchWorkspaces();
  }, []);

  return (
    <>
      {showAddPopUp ? <DashboardAddPopUp popup={setShowAddPopUp} /> : null}

      <NotificationsContainer style={{ flex: 3 }}>
        {newsItems}
      </NotificationsContainer>
      <Container>
        <ProfileWrapper>
          <WorkspaceTextContainer>
            <h5>
              {Parse.User.current().get("firstName") +
                " " +
                Parse.User.current().get("lastName")}

              <span>@{Parse.User.current().get("username")} sadf</span>
            </h5>

            <p>{Parse.User.current().get("description")}</p>
          </WorkspaceTextContainer>
          <img
            src={Parse.User.current().get("image").url()}
            alt={
              Parse.User.current().get("firstName") +
              " " +
              Parse.User.current().get("lastName")
            }
          />
        </ProfileWrapper>
        <Workspaces>
          <h4> گروه های آموزشی ساخت شما</h4>
          {workspaces}
        </Workspaces>
      </Container>
      <PlusButton onClick={() => setShowAddPopUp(true)}>
        <Plus fill="white" width="30" />
      </PlusButton>
    </>
  );
}
