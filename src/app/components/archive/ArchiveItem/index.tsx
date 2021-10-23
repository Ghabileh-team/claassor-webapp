import React, { ReactElement, useState } from "react";
import { ReactComponent as Ticket } from "src/assets/icons/Ticket.svg";
import { ReactComponent as Logout } from "src/assets/icons/Logout.svg";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateWorkspace } from "src/redux/archiveSlice";
import {
  Bottom,
  IconsContainer,
  SenderContainer,
  SenderImage,
  SenderTextContainer,
  StyledArchiveItem,
  Top,
} from "./styles";

const Parse = require("parse");

interface Props {
  object?: any;
}

export default function ArchiveItem(props: Props): ReactElement {
  const [object, setObject] = useState<{ id: string; get: Function }>(
    props.object
  );
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    Parse.User.current().relation("workspaces").remove(object);

    Parse.User.current()
      .save()
      .then(() => {
        alert("deleted");
      });
  };

  const ticketClick = () => {
    dispatch(updateWorkspace(object.id));

    history.push(`${url}/workspace`);
  };
  return (
    <StyledArchiveItem>
      <Top />
      <Bottom>
        <SenderContainer>
          <SenderImage src={object.get("image")?.url()} />
          <SenderTextContainer>
            <h5>{object.get("firstName")}</h5>
            <p>
              type: <span>public</span>
            </p>
            <p>@{object.get("username")}</p>
          </SenderTextContainer>
        </SenderContainer>
        <IconsContainer>
          {/* <StyledLink to={`${url}/workspace`}> */}
          <Ticket
            cursor="pointer"
            style={{ marginLeft: 5 }}
            width="18px"
            stroke="#ff0000"
            onClick={ticketClick}
          />
          {/* </StyledLink> */}

          <Logout
            style={{ marginLeft: 5 }}
            stroke="red"
            cursor="pointer"
            width="18px"
            onClick={handleLogout}
          />
        </IconsContainer>
      </Bottom>
    </StyledArchiveItem>
  );
}
