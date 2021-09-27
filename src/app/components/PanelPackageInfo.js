import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import {
  Button,
  NormalDescription,
  NormalText,
  PanelBox,
} from "../../styles/components";

export default function PanelPackageInfo() {
  const PackageContainer = styled(PanelBox)`
    height: fit-content;
    background: linear-gradient(
        to left,
        rgba(33, 140, 165, 0.83) 16.45%,
        rgba(0, 81, 100, 0) 73.13%
      )
      #1b164a;
    color: #ffffff;
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    place-items: center;
    text-align: right;
  `;

  const ChartContainer = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #000;
      font-size: 1em;
    }
  `;
  const shiftSize = 7;

  return (
    <PackageContainer>
      <ChartContainer>
        <h3>5/6</h3>
        <PieChart
          data={[
            { title: "Done", value: 5, color: "url(#gradient1)" },
            { title: "To-do", value: 1, color: "transparent" },
          ]}
          radius={PieChart.defaultProps.radius - shiftSize}
          lineWidth={50}
        >
          <defs>
            <linearGradient id="gradient1">
              <stop offset="0%" stopColor="#218CA5" />
              {/* <stop offset="45%" stopColor="#ffb961" />
                      <stop offset="55%" stopColor="#ffb961" /> */}
              <stop offset="100%" stopColor="#1B164A" />
            </linearGradient>
          </defs>
        </PieChart>
      </ChartContainer>
      <div style={{ textAlign: "right" }}>
        <NormalText as="h5">:بسته فعال</NormalText>
        <NormalDescription>VIP+ بسته معلم</NormalDescription>
        <Button style={{ margin: 0 }} lightText gray>
          تمدید یا خرید بسته جدید
        </Button>
      </div>
    </PackageContainer>
  );
}
