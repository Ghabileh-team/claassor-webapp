import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import hajitoon from "../../assets/Hajitoon.jpg";
import { ReactComponent as Notification } from "../../assets/icons/Notification.svg";
import { ReactComponent as Users } from "../../assets/icons/Users.svg";
import { ReactComponent as Ticket } from "../../assets/icons/Ticket.svg";
import { ReactComponent as Edit } from "../../assets/icons/Edit.svg";
import { ReactComponent as Arrow } from "../../assets/icons/Arrow.svg";

import { useSelector } from "react-redux";
import { selectIsAdmin, selectIsCreator } from "../../../redux/archiveSlice";
const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 2vw;
  margin-right: 2vw;
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
// const TopBox = styled.div`
//   box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
//   border-radius: 15px;
//   background-color: white;
// `;

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

const TopBox = styled.div`
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

export default function ContentContainer() {
  const { url, path } = useRouteMatch();
  const isAdmin = useSelector(selectIsAdmin);
  const isCreator = useSelector(selectIsCreator);
  return (
    <Container>
      <Top>
        <TopBox>hiiiii</TopBox>
        <Arrow />
        <TopBox>hiiiii</TopBox>
        <Arrow />

        <TopBox>
          <WorkspaceLeftSide>
            <LeftTop>
              <h5>
                نوع:<span>مدرسه</span>
              </h5>
              <h5>
                <span>asdfasdf</span> @ asdfsaf
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
              {/* <p>{workspace.get("description")}</p> */}
            </LeftBottom>
          </WorkspaceLeftSide>
          <div>
            <img src={hajitoon} />
          </div>
        </TopBox>
      </Top>
    </Container>
  );
}
