import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { PanelBox, PanelContainer } from "../../styles/components";

import "swiper/swiper.scss";

import { Route, useRouteMatch } from "react-router";
import PanelArchiveWorkspaceArea from "./PanelArchiveWorkspaceArea";
import ArchiveItem from "../components/archive/ArchiveItem";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "../components/LoadingIndicator";
const Parse = require("parse");

const ArchiveContainer = styled(PanelBox)`
  width: 100%;
  margin-right: 2vw;
  display: flex;
  justify-content: flex-end;
`;

const LeftBottom = styled.div`
  display: flex;
  p {
    font-size: 12px;
  }
`;

interface Props {}
export default function PanelArchive(props: Props) {
  const [workspaces, setWorkspaces] = useState([]);
  let { path, url } = useRouteMatch();

  const fetchWorkspaces = () => {
    const workspacesQuery = Parse.User.current().relation("workspaces").query();

    trackPromise(
      workspacesQuery.find().then((res) => {
        console.log(res);
        let items = [];
        res.forEach((w) => {
          items.push(<ArchiveItem object={w} />);
        });
        setWorkspaces(items);
      })
    );
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);
  return (
    <PanelContainer>
      <Route path={`${path}/workspace`}>
        <PanelArchiveWorkspaceArea />
      </Route>
      <Route exact path={path}>
        <ArchiveContainer>
          <LoadingIndicator /> {workspaces}
        </ArchiveContainer>
      </Route>
    </PanelContainer>
  );
}
