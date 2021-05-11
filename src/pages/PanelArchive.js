import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  PanelBigContainer,
  PanelBox,
  PanelContainer,
  PanelWindow,
  theme,
} from "../Styles";

import "swiper/swiper.scss";
import PanelNav from "../components/PanelNav";
import PanelHeader from "../components/PanelHeader";
import { Route, useRouteMatch } from "react-router";
import PanelArchiveWorkspaceArea from "./PanelArchiveWorkspaceArea";
import ArchiveItem from "../components/archive/ArchiveItem";

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

export default function PanelArchive(props) {
  const [workspaces, setWorkspaces] = useState([]);
  let { path, url } = useRouteMatch();

  const fetchWorkspaces = () => {
    const workspacesQuery = Parse.User.current().relation("workspaces").query();
    workspacesQuery.find().then((res) => {
      let items = [];
      res.forEach((w) => {
        items.push(<ArchiveItem object={w} />);
      });
      setWorkspaces(items);
    });
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <PanelContainer>
        <Route path={`${path}/workspace`}>
          <PanelArchiveWorkspaceArea />
        </Route>
        <Route exact path={path}>
          <ArchiveContainer>{workspaces}</ArchiveContainer>
        </Route>
      </PanelContainer>
    </ThemeProvider>
  );
}
