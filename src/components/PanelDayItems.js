import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { PanelBox } from "../Styles";
import DayItem from "./DayItem";
import { ReactComponent as CalenadarSVG } from "../assets/icons/Calendar.svg";
import NoteItem from "./NoteItem";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "./LoadingIndicator";
const Parse = require("parse");
const PanelDayItemsContainer = styled(PanelBox)`
  height: fit-content;
  margin-bottom: 3vh;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;
const Calendar = styled(CalenadarSVG)`
  @media screen and (max-width: 1024px) {
    width: 22px;
    height: 22px;
  }
  @media screen and (max-width: 720px) {
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 420px) {
    width: 14px;
    height: 14px;
  }
`;

const CalendarIcon = styled.div`
  padding: 6px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-left: 1vw;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    width: 28px;
    height: 28px;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2vh;
`;

const NavbarBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 30px;
  padding: 10px;
  font-family: "dana-regular";
  margin-left: 1vw;
  font-size: 12px;
  cursor: pointer;
  div {
    border-radius: 50%;
    background-color: #f1f1f1;
    width: 6px;
    height: 6px;
    margin-right: 5px;
    /* display: none; */
    &.visible {
      /* display: block; */
      background-color: #92bfc5;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 0.5em;
    }
  }
  @media screen and (max-width: 720px) {
    p {
      font-size: 0.6em;
    }
  }
`;

export default function PanelDayItems() {
  const [visible, setVisible] = useState(false);
  const [components, setComponents] = useState([]);
  const [notes, setNotes] = useState([]);
  const date = new Date();
  const today = date.getDay() + 1;
  console.log(today);
  const fetchUserSchedule = () => {
    const Labels = Parse.User.current().relation("labels");
    const query = Labels.query();
    query.find().then((userLabels) => {
      const items = [];
      const weekSchedule = userLabels[0]?.get("weekSchedule");

      weekSchedule?.forEach((l) => {
        if (l.day === today) {
          items.push(
            <SwiperSlide>
              <DayItem object={l} />
            </SwiperSlide>
          );
        }
      });

      setComponents(items);
    });
  };

  const fetchUserNotes = () => {
    const Notes = Parse.Object.extend("Notes");
    const notesQuery = new Parse.Query(Notes);
    notesQuery.equalTo("users", Parse.User.current());
    trackPromise(
      notesQuery.find().then((res) => {
        const items = [];

        res?.forEach((l) => {
          items.push(
            <SwiperSlide>
              <NoteItem object={l} />
            </SwiperSlide>
          );
        });

        setNotes(items);
      })
    );
  };

  useEffect(() => {
    fetchUserNotes();
    fetchUserSchedule();
  }, []);
  return (
    <PanelDayItemsContainer>
      <NavBarContainer>
        <NavbarBtn onClick={() => setVisible(true)}>
          <div className={visible ? "visible" : null}></div>

          <p>یادداشت ها</p>
        </NavbarBtn>
        <NavbarBtn onClick={() => setVisible(false)}>
          <div className={visible ? null : "visible"}></div>
          <p>رویداد های امروز</p>
        </NavbarBtn>
        <CalendarIcon>
          <Calendar style={{ margin: "auto" }} />
        </CalendarIcon>
      </NavBarContainer>
      <LoadingIndicator />
      <Swiper
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {visible ? notes : components}
      </Swiper>
    </PanelDayItemsContainer>
  );
}
