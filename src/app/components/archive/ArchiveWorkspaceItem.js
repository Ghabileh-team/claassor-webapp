import React from "react";
import styled from "styled-components";
import { PanelBox, StyledLink } from "../../../styles/components";
import { ReactComponent as Delete } from "../../assets/icons/Delete.svg";
import userIcon from "../../assets/Hajitoon.jpg";
import { ReactComponent as Edit } from "../../assets/icons/Edit.svg";
import { ReactComponent as AddUser } from "../../assets/icons/Add-user.svg";
import { ReactComponent as DeleteUser } from "../../assets/icons/Delete-user.svg";
import { useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAdmin,
  selectIsCreator,
  updateArchiveLabel,
} from "../../../redux/archiveSlice";
import { updateShowPopupArchive } from "../../../redux/globalValuesSlice";
const Container = styled(PanelBox)`
  padding: 0;
  display: grid;
  /* margin-right: 1vw; */
  margin-bottom: 1vw;
  grid-template-rows: 1fr;
  width: fit-content;
  border-radius: 15px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`;

const Bottom = styled.div`
  margin: 10px;
`;

const SenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SenderTextContainer = styled.div`
  text-align: center;
  h5 {
    font-size: 12px;
  }
  p {
    font-size: 8px;
    color: gray;

    span {
      color: ${(props) => props.theme.main};
    }
  }
`;
const SenderImage = styled.img`
  border-radius: 10px;
  width: 45px;
  height: 45px;
  object-fit: cover;
  object-position: 0 1px;
`;

const IconsContainer = styled.div`
  display: flex;
  margin-top: 3vh;
  justify-content: space-around;
  align-items: center;
`;
export default function ArchiveWorkspaceItem(props) {
  const { path, url } = useRouteMatch();
  const data = props.object;
  const dispatch = useDispatch();
  const history = useHistory();

  const isCreator = useSelector(selectIsCreator);
  const isAdmin = useSelector(selectIsAdmin);

  const onClickFunc = () => {
    dispatch(updateArchiveLabel(data.id));
    history.push(`${url}/item`);
  };

  const handleShowPopup = () => {
    dispatch(updateShowPopupArchive(true));
  };

  return (
    <Container>
      <Bottom>
        <SenderContainer onClick={onClickFunc}>
          <SenderImage src={userIcon} />
          <SenderTextContainer>
            <h5>{props.users ? data?.get("firstName") : data?.get("name")}</h5>
          </SenderTextContainer>
        </SenderContainer>

        <IconsContainer>
          {props.users ? (
            <>
              <AddUser
                cursor="pointer"
                style={{ marginLeft: 5 }}
                width="18px"
                stroke="#ff0000"
                small
              />
              <DeleteUser cursor="pointer" width="18px" small />
            </>
          ) : isAdmin || isCreator ? (
            <>
              <Edit
                cursor="pointer"
                style={{ marginLeft: 5 }}
                width="18px"
                stroke="#ff0000"
                onClick={handleShowPopup}
                small
              />
              <Delete cursor="pointer" width="18px" small />
            </>
          ) : null}
        </IconsContainer>
      </Bottom>
    </Container>
  );
}
