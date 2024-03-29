import React, { ReactElement } from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import PanelHeader from "src/app/components/PanelHeader";
import StopWatch from "src/app/components/StopWatch";
import {
  PanelBigContainer,
  PanelBox,
  PanelContainer,
  PanelContentContainer,
  PanelWindow,
} from "src/styles/components";
import PanelNav from "../components/PanelNav";

const TopBar = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-around;
`;

const ChartSection = styled(PanelBox)`
  display: grid;
  height: 30vh;
  place-items: center;
`;

const ChartContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 22vh;
  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 1em;
  }
`;

export default function PanelPlans(): ReactElement {
  const shiftSize = 7;

  return (
    <PanelWindow>
      <PanelHeader />

      <PanelBigContainer>
        <PanelContainer>
          <PanelContentContainer>
            <TopBar>
              <StopWatch />
              <ChartSection>
                <h5>درصد تکمیل برنامه امروز</h5>
                <ChartContainer>
                  <h3>5/6</h3>
                  <PieChart
                    data={[
                      { title: "Done", value: 1, color: "url(#gradient1)" },
                      {
                        title: "To-do",
                        value: 2,
                        color: "transparent",
                      },
                    ]}
                    radius={PieChart.defaultProps.radius - shiftSize}
                    lineWidth={20}
                  >
                    <defs>
                      <linearGradient id="gradient1">
                        <stop offset="0%" stopColor="#218CA5" />

                        <stop offset="100%" stopColor="#1B164A" />
                      </linearGradient>
                    </defs>
                  </PieChart>
                </ChartContainer>
              </ChartSection>
              <StopWatch />
            </TopBar>
          </PanelContentContainer>
        </PanelContainer>
        <PanelNav />
      </PanelBigContainer>
    </PanelWindow>
  );
}
