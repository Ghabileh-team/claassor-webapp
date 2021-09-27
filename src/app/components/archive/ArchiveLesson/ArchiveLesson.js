import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router";
import styled from "styled-components";
import { PanelBox } from "../../../../styles/components";
import profile from "../../../assets/Hajitoon.jpg";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { ReactComponent as Plus } from "../../../assets/icons/Plus.svg";

import ArchiveBoxComponent from "./ArchiveBoxComponent";
import { useSelector } from "react-redux";
import { selectArchiveLabel } from "../../../../redux/archiveSlice";
import Chapters from "./Chapters";
import { useEffect } from "react";

const TopBar = styled.div`
  background-color: white;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
`;

const LessonImage = styled.img`
  border-radius: 5px;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

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
    font-size: 12px;
    span {
      color: #1b164a;
      font-size: 10px;
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
  justify-content: center;
  align-items: center;
  img {
    width: 4vw;
    height: 4vw;
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

const PlusComponent = styled.div`
  background-color: gray;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 30px;
  cursor: pointer;
`;

const Parse = require("parse");

export default function ArchiveLesson() {
  const { url, path } = useRouteMatch();
  const [label, setLabel] = useState();
  const labelId = useSelector(selectArchiveLabel);

  useEffect(() => {
    const Labels = Parse.Object.extend("Labels");
    const query = new Parse.Query(Labels);
    query.equalTo("objectId", labelId);

    query.first().then((obj) => {
      setLabel(obj);
    });
  }, []);
  return (
    <>
      <WorkspaceInfoBox>
        <WorkspaceLeftSide>
          <LeftTop>
            <h5>
              <span>معلم فیزیک</span>
            </h5>
            <h5>
              <span>{label?.get("name")}</span> @Soltani3
            </h5>
            <h5>
              وضعیت:
              <span>عضو</span>
            </h5>
          </LeftTop>

          {/* <LeftBottom>
          <IconsContainer>
            {/* <Link to={`${url}/users`}>
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
          {/* <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p> 
        </LeftBottom> */}
        </WorkspaceLeftSide>
        <div>
          <img src={profile} />
        </div>
      </WorkspaceInfoBox>

      <Route exact path={`${path}`}>
        <h5>مباحث</h5>
        <Chapters step="unit" />
      </Route>

      <Route path={`${path}/unit`}>
        <h5>مبحث اندازه گیری</h5>
        <Chapters step="session" />
      </Route>

      <PlusComponent>
        <Plus width="20" stroke="#1B164A" fill="#1B164A" />
      </PlusComponent>
    </>
  );
}
