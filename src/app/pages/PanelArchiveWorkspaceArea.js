import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../assets/Hajitoon.jpg";
import { ReactComponent as Notification } from "../assets/icons/Notification.svg";
import { ReactComponent as Users } from "../assets/icons/Users.svg";
import { ReactComponent as Ticket } from "../assets/icons/Ticket.svg";
import { ReactComponent as Edit } from "../assets/icons/Edit.svg";
import { PanelBox } from "../../styles/components";
import ArchiveWorkspaceItem from "../components/archive/ArchiveWorkspaceItem";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ArchiveUsers from "../components/archive/ArchiveUsers";
import PanelNotification from "../components/PanelNotification";
import ArchiveLesson from "../components/archive/ArchiveLesson/ArchiveLesson";
import { useSelector } from "react-redux";
import {
  selectIsAdmin,
  selectIsCreator,
  selectWorkspace,
} from "../../redux/archiveSlice";
import ContentContainer from "../components/archive/ContentContainer/index";
import { trackPromise } from "react-promise-tracker";
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
  justify-content: space-between;
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

export default function PanelArchiveWorkspaceArea(props) {
  const [items, setItems] = useState([]);
  const [workspace, setWorkspace] = useState();

  const { url, path } = useRouteMatch();

  const workspaceId = useSelector(selectWorkspace);

  const isAdmin = useSelector(selectIsAdmin);
  const isCreator = useSelector(selectIsCreator);

  const fetchWorkspaceItem = (arg) => {
    const Labels = Parse.Object.extend("Labels");
    const query = new Parse.Query(Labels);
    query.equalTo("workspace", arg);
    trackPromise(
      query.find().then((res) => {
        let items = [];
        res.forEach((i) => {
          items.push(<ArchiveWorkspaceItem popup={props.popup} object={i} />);
        });
        setItems(items);
      })
    );
  };
  const fetchWorkSpaceData = () => {
    let query = new Parse.Query(Parse.User);
    query.equalTo("objectId", workspaceId);
    trackPromise(
      query.first().then((res) => {
        console.log(res);
        setWorkspace(res);
      })
    );
  };
  useEffect(() => {
    fetchWorkSpaceData();
  }, []);

  useEffect(() => {
    fetchWorkspaceItem(workspace);
  }, [workspace]);
  return (
    <Switch>
      <Route path={`${path}/item/unit/session`}>
        <ContentContainer />
      </Route>
      <Route path={`${path}`}>
        <LeftSide>
          <Route path={`${path}/users`}>
            <ArchiveUsers />
          </Route>
          <Route path={`${path}/notifications`}>
            <PanelNotification workspace={workspace} />
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
            {workspace && (
              <>
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
                      <span>
                        {isCreator ? "موسس" : isAdmin ? "ادمین" : "دانش آموز"}
                      </span>
                    </h5>
                  </LeftTop>
                  <LeftBottom>
                    <IconsContainer>
                      {isCreator || isAdmin ? (
                        <>
                          <Link to={`${url}/edit`}>
                            <Edit width="20" height="20" />
                          </Link>
                          <Link to={`${url}/users`}>
                            <Ticket width="18" height="18" />
                          </Link>
                        </>
                      ) : null}

                      <Link to={`${url}/notifications`}>
                        <Notification stroke="#1B164A" width="20" height="20" />
                      </Link>
                      <Link to={`${url}/users`}>
                        <Users width="20" height="20" />
                      </Link>
                    </IconsContainer>
                    <p>{workspace.get("description")}</p>
                  </LeftBottom>
                </WorkspaceLeftSide>
                <div>{/* <img src={workspace.image.url} /> */}</div>
              </>
            )}
          </WorkspaceInfoBox>
          <h3>آرشیو</h3>
          <RightsideItems>{items}</RightsideItems>
        </RightSide>
      </Route>
    </Switch>
  );
}
