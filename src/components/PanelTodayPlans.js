import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import { NormalText, PanelBox } from "../Styles";
import DashboardAddPopUp from "./Dashboard/DashboardAddPopUp";
import PanelTask from "./PanelTask";
const Parse = require("parse");

const TodayPlansContainer = styled(PanelBox)`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-gap: 20%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  place-items: center;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

const TasksContainer = styled.div`
  height: 100%;
`;
const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
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

export default function PanelTodayPlans(props) {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState(0);
  const shiftSize = 7;

  const fetchTasks = () => {
    const Tasks = Parse.Object.extend("Tasks");
    const query = new Parse.Query(Tasks);
    query.equalTo("users", Parse.User.current());
    query.find().then((res) => {
      const items = [];
      let value = 0;
      res.map((item) => {
        items.push(
          <PanelTask key={items.id} object={item} label={item.get("title")} />
        );
        if (item.get("done") === true) {
          value++;
        }
      });
      setValue(value);
      setTasks(items);
    });
  };

  const handleAddTask = () => {
    props.popup(true);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TodayPlansContainer>
      <ChartContainer>
        <h3>
          {value}/{tasks.length}
        </h3>
        <PieChart
          data={[
            { title: "Done", value: value, color: "url(#gradient1)" },
            {
              title: "To-do",
              value: tasks.length - value,
              color: "transparent",
            },
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

      <TasksContainer>
        <Tasks>
          <NormalText as="h5" gray>
            :برنامه های امروز
          </NormalText>
          {/* <PanelTask label="hasdfsadfsdafsafasi" />
          <PanelTask label="hdfsdfsdfi" /> */}
          {tasks}
          <p
            style={{ marginRight: 24, cursor: "pointer" }}
            onClick={handleAddTask}
          >
            +
          </p>
        </Tasks>
      </TasksContainer>
    </TodayPlansContainer>
  );
}
