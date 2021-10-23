import React, { ReactElement } from "react";
import styled from "styled-components";
import { PanelContainer, PanelContentContainer } from "src/styles/components";

import "swiper/swiper.scss";
import PanelTodayPlans from "../components/PanelTodayPlans";
import PanelDayItems from "../components/PanelDayItems";
import PanelNotification from "../components/PanelNotification";

const PanelDashboardLeftColumn = styled.div`
  flex: 1;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default function PanelDashboard(): ReactElement {
  return (
    <PanelContainer>
      <PanelDashboardLeftColumn>
        <PanelNotification />
        {/* <PanelPackageInfo /> */}
      </PanelDashboardLeftColumn>
      <PanelContentContainer>
        <PanelDayItems />
        <PanelTodayPlans />
      </PanelContentContainer>
    </PanelContainer>
  );
}
