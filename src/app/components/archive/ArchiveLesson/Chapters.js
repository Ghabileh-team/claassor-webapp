import React, { useEffect, useState } from "react";
import ArchiveBoxComponent from "./ArchiveBoxComponent";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useSelector } from "react-redux";
import {
  selectArchiveLabel,
  selectArchiveUnit,
} from "../../../../redux/archiveSlice";
const Parse = require("parse");

export default function Chapters(props) {
  const [units, setUnits] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const unit = useSelector(selectArchiveUnit);

  const label = useSelector(selectArchiveLabel);
  const Labels = Parse.Object.extend("Labels");
  const labelsQuery = new Parse.Query(Labels);
  const Container = styled(SimpleBar)`
    display: flex;
    height: 40vh;
    flex: 1;
    overflow-y: scroll;
  `;
  const fetchUnits = (l) => {
    const Units = Parse.Object.extend("Units");
    const query = new Parse.Query(Units);
    query.equalTo("label", l);
    query.find().then((res) => {
      console.log(res);
      let items = [];
      res.forEach((item) => {
        items.push(<ArchiveBoxComponent data={item} step={props.step} />);
      });
      setUnits(items);
    });
  };
  const fetchSavedItems = () => {
    if (props.step === "saved") {
      const query = Parse.User.current().relation("savedSessions").query();
      query.find().then((res) => {
        console.log(res);
        let items = [];
        res.forEach((item) => {
          items.push(<ArchiveBoxComponent data={item} step={props.step} />);
        });
        setSavedItems(items);
      });
    }
  };
  const fetchSessions = () => {
    if (props.step === "session") {
      const Units = Parse.Object.extend("Units");
      const query = new Parse.Query(Units);
      query.equalTo("objectId", unit);
      query.first().then((obj) => {
        const query = obj?.relation("sessions").query();
        query.find().then((res) => {
          let items = [];
          res.forEach((item) => {
            items.push(<ArchiveBoxComponent data={item} step={props.step} />);
          });
          setSessions(items);
        });
      });
    }
  };

  useEffect(() => {
    //   props.step === "unit" ?
    labelsQuery.equalTo("objectId", label);
    labelsQuery.first().then((obj) => {
      fetchUnits(obj);
    });

    // :
    if (props.step === "session") {
      fetchSessions();
    }

    if (props.step === "saved") {
      fetchSavedItems();
    }
  }, []);
  return (
    <Container>
      {props.step === "unit"
        ? units
        : props.step === "saved"
        ? savedItems
        : sessions}
    </Container>
  );
}
