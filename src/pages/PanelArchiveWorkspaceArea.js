import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import profile from "../assets/Hajitoon.jpg";
import { ReactComponent as Notification } from "../assets/icons/Notification.svg";
import { ReactComponent as Users } from "../assets/icons/Users.svg";
import { ReactComponent as Ticket } from "../assets/icons/Ticket.svg";
import { ReactComponent as Edit } from "../assets/icons/Edit.svg";
import { PanelBox, theme } from "../Styles";
import ArchiveWorkspaceItem from "../components/archive/ArchiveWorkspaceItem";
import { Link, Route, useRouteMatch } from "react-router-dom";
import ArchiveUsers from "../components/archive/ArchiveUsers";
import ArchiveLesson from "../components/archive/ArchiveLesson/ArchiveLesson";
import { useSelector } from "react-redux";
import { selectWorkspace } from "../redux/archiveSlice";
const Parse = require("parse");

const RightSide = styled(PanelBox)`
  flex: 1.5;
  margin: 0 2vw;
  text-align: right;
`;
const LeftSide = styled(PanelBox)`
  flex: 1;
  overflow: hidden;
  /* margin: 0 2vw;
text-align: right; */
`;
const WorkspaceLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
  padding: 1vw;
  /* background-color: white;
border-radius: 10px; */
  place-items: center;
  text-align: center;
  h5 {
    border-left: 1px solid gray;
    padding-left: 5px;
    color: gray;
    span {
      color: #1b164a;
    }
  }
`;

const WorkspaceInfoBox = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  padding: 1vw;
  margin-bottom: 1vw;

  img {
    width: 5vw;
    height: 5vw;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const LeftBottom = styled.div`
  display: flex;
  p {
    font-size: 12px;
    flex: 2;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  margin-right: 5px;
`;

const RightsideItems = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export default function PanelArchiveWorkspaceArea() {
  const [items, setItems] = useState([]);
  const { url, path } = useRouteMatch();

  const workspace = useSelector(selectWorkspace);
  const fetchWorkspaceItem = () => {
    const Labels = Parse.Object.extend("Labels");
    const query = new Parse.Query(Labels);
    query.equalTo("workspace", workspace);
    query.find().then((res) => {
      let items = [];
      res.forEach((i) => {
        items.push(<ArchiveWorkspaceItem object={i} />);
      });
      setItems(items);
    });
  };

  useEffect(() => {
    fetchWorkspaceItem();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <LeftSide>
        <Route path={`${path}/users`}>
          <ArchiveUsers />
        </Route>
        <Route path={`${path}/notifications`}>
          <p>Notifications</p>
        </Route>
        <Route path={`${path}/edit`}>
          <p>edit</p>
        </Route>
        <Route path={`${path}/item`}>
          <ArchiveLesson />
        </Route>
      </LeftSide>
      <RightSide>
        <WorkspaceInfoBox>
          <WorkspaceLeftSide>
            <LeftTop>
              <h5>
                نوع:<span>مدرسه</span>
              </h5>
              <h5>
                <span>{workspace.get("firstName")}</span> @
                {workspace.get("username")}
              </h5>
              <h5>
                وضعیت:
                <span>ادمین</span>
              </h5>
            </LeftTop>
            <LeftBottom>
              <IconsContainer>
                <Link to={`${url}/users`}>
                  <Ticket width="18" height="18" />
                </Link>
                <Link to={`${url}/notifications`}>
                  <Notification stroke="#1B164A" width="20" height="20" />
                </Link>
                <Link to={`${url}/users`}>
                  <Users width="20" height="20" />
                </Link>
                <Link to={`${url}/edit`}>
                  <Edit width="20" height="20" />
                </Link>
              </IconsContainer>
              <p>{workspace.get("description")}</p>
            </LeftBottom>
          </WorkspaceLeftSide>
          <div>
            <img src={workspace?.get("image")} />
          </div>
        </WorkspaceInfoBox>
        <h3>آرشیو</h3>
        <RightsideItems>{items}</RightsideItems>
      </RightSide>
    </ThemeProvider>
  );
}
