import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Edit } from "src/assets/icons/Edit.svg";
import { ReactComponent as Delete } from "src/assets/icons/Delete.svg";
import { StyledLink } from "src/styles/components";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAdmin,
  selectIsCreator,
  updateArchiveSession,
  updateArchiveUnit,
} from "../../../../redux/archiveSlice";
import { selectCurrentWorkspace } from "../../../../redux/globalValuesSlice";
import DashboardAddPopUp from "../../Dashboard/DashboardAddPopUp";
import { ReactComponent as Bookmark } from "src/assets/icons/Bookmark.svg";

const Parse = require("parse");

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin: 1vw 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  h5 {
    font-size: 1em;
  }
  p {
    color: gray;
    font-size: 0.7em;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: enter;
  align-items: center;
`;

export default function ArchiveBoxComponent(props) {
  const [saved, setSaved] = useState(false);
  const [data, setData] = useState(props.data);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const isCreator = useSelector(selectIsCreator);
  const isAdmin = useSelector(selectIsAdmin);
  console.log(data);
  const UserContianer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: ${props.user ? "1fr 2fr" : "3fr 1fr"};
    grid-gap: 10px;
  `;
  const onClickFunc = () => {
    if (props.step === "unit") {
      dispatch(updateArchiveUnit(data.id));
    } else if (props.step === "session") {
      dispatch(updateArchiveSession(data.id));
    }
  };

  const handleSaved = () => {
    if (saved) {
      Parse.User.current().relation("savedSessions").remove(data);
      Parse.User.current()
        .save()
        .then(() => setSaved(false));
    } else {
      Parse.User.current().relation("savedSessions").add(data);
      Parse.User.current()
        .save()
        .then(() => setSaved(true));
    }
  };

  const checkSaved = () => {
    const query = Parse.User.current().relation("savedSessions").query();
    query.equalTo("objectId", data.id);
    query.find().then((res) => {
      if (res.length === 1) {
        setSaved(true);
      }
    });
  };

  useEffect(() => {
    if (!props.user) {
      checkSaved();
    }
  }, []);

  return (
    <Container onClick={onClickFunc}>
      {/* <DashboardAddPopUp /> */}
      <UserContianer>
        {props.user ? <Image src="https://picsum.photos/200" /> : null}
        <StyledLink to={`${url}/${props.step}`}>
          <TextContainer>
            {props.user ? (
              <>
                <h5>{props.data.get("firstName")}</h5>
                <p>@{props.data.get("username")}</p>
              </>
            ) : (
              <h5>{data.get("title")}</h5>
            )}
          </TextContainer>
        </StyledLink>
      </UserContianer>
      <IconsContainer>
        {isAdmin || isCreator ? (
          <>
            <Edit
              cursor="pointer"
              style={{ marginLeft: 5 }}
              width="16px"
              stroke="#ff0000"
              small
            />
            <Delete cursor="pointer" width="16" small />
          </>
        ) : null}

        {props.step === "session" || props.step === "saved" ? (
          <Bookmark
            cursor="pointer"
            stroke="#B4CBB2"
            fill={saved ? "#B4CBB2" : "none"}
            width="16"
            onClick={handleSaved}
          />
        ) : null}
      </IconsContainer>
    </Container>
  );
}
