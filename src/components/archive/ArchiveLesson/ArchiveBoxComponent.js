import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../../../assets/Hajitoon.jpg";
import { ReactComponent as Edit } from "../../../assets/icons/Edit.svg";
import { ReactComponent as Delete } from "../../../assets/icons/Delete.svg";
import { StyledLink } from "../../../Styles";
import { useRouteMatch } from "react-router";
import { useDispatch } from "react-redux";
import { updateArchiveUnit } from "../../../redux/archiveSlice";
import { ReactComponent as Bookmark } from "../../../assets/icons/Bookmark.svg";

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

  const UserContianer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: ${props.user ? "1fr 2fr" : "3fr 1fr"};
    grid-gap: 10px;
  `;
  const onClickFunc = () => {
    if (props.step === "unit") {
      dispatch(updateArchiveUnit(data));
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
      <UserContianer>
        {props.user ? <Image src={profile} /> : null}
        <StyledLink to={`${url}/${props.step}`}>
          <TextContainer>
            {!props.user ? <h5>{data.get("title")}</h5> : null}

            {props.user ? <p>@asdfasdf</p> : null}
          </TextContainer>
        </StyledLink>
      </UserContianer>
      <IconsContainer>
        <Edit
          cursor="pointer"
          style={{ marginLeft: 5 }}
          width="16px"
          stroke="#ff0000"
          small
        />

        <Delete cursor="pointer" width="16" small />

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
