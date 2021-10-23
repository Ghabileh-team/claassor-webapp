import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

import { PanelBox, PanelContainer } from "src/styles/components";

import "swiper/swiper.scss";

import { Route, useRouteMatch } from "react-router";
import ArchiveItem from "src/app/components/archive/ArchiveItem";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "src/app/components/LoadingIndicator";
import PanelArchiveWorkspaceArea from "./PanelArchiveWorkspaceArea";

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
export default function PanelArchive(props: Props): ReactElement {
  const [workspaces, setWorkspaces] = useState<any>([]);
  const { path, url } = useRouteMatch();

  const fetchWorkspaces = (): void => {
    const workspacesQuery = Parse.User.current().relation("workspaces").query();

    trackPromise(
      workspacesQuery.find().then((res: any) => {
        console.log(res);
        const items: any = [];
        res.forEach((w: any) => {
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
          <LoadingIndicator />
          {workspaces}
        </ArchiveContainer>
      </Route>
    </PanelContainer>
  );
}
