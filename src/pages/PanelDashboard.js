import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  PanelBigContainer,
  PanelContainer,
  PanelContentContainer,
  PanelWindow,
  theme,
} from "../Styles";

import "swiper/swiper.scss";
import PanelPackageInfo from "../components/PanelPackageInfo";
import PanelTodayPlans from "../components/PanelTodayPlans";
import PanelNav from "../components/PanelNav";
import PanelDayItems from "../components/PanelDayItems";
import PanelHeader from "../components/PanelHeader";
import PanelNotification from "../components/PanelNotification";

const PanelDashboardLeftColumn = styled.div`
  flex: 1;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default function PanelDashboard(props) {
  const [showAddPopUp, setShowAddPopUp] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <PanelContainer>
        <PanelDashboardLeftColumn>
          <PanelNotification />
          {/* <PanelPackageInfo /> */}
        </PanelDashboardLeftColumn>
        <PanelContentContainer>
          <PanelDayItems />
          <PanelTodayPlans popup={setShowAddPopUp} />
        </PanelContentContainer>
      </PanelContainer>
    </ThemeProvider>
  );
}
