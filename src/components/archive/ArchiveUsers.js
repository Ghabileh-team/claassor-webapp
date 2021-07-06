import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import ArchiveBoxComponent from "./ArchiveLesson/ArchiveBoxComponent";
import ArchiveWorkspaceItem from "./ArchiveWorkspaceItem";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useSelector } from "react-redux";
import { selectWorkspace } from "../../redux/archiveSlice";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Requests = styled.div`
  text-align: right;
  margin-top: 1vw;
`;

const Users = styled(SimpleBar)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: 1vw;
  overflow-x: visible;
  height: 30vh;
  padding-right: 10px;
  scrollbar-arrow-color: white;
`;

const Parse = require("parse");

export default function ArchiveUsers() {
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const query = new Parse.Query(Parse.User);
  const workspace = useSelector(selectWorkspace);
  const fetchMembers = () => {
    query.equalTo("workspaces", workspace);
    query.find().then((res) => {
      let items = [];
      res.forEach((u) => {
        items.push(<ArchiveBoxComponent data={u} user />);
      });
      setUsers(items);
    });
  };
  const fetchRequests = () => {
    const query = workspace.relation("pendings").query();
    query.find().then((res) => {
      let items = [];
      res.forEach((i) => {
        items.push(
          <SwiperSlide>
            <ArchiveWorkspaceItem users data={i} />{" "}
          </SwiperSlide>
        );
      });
      setRequests(items);
    });
  };
  useEffect(() => {
    fetchMembers();
  }, []);

  console.log(users);

  return (
    <Container>
      <h5> درخواست ها</h5>

      <Requests>
        <Swiper spaceBetween={30} slidesPerView={3}>
          {requests}
        </Swiper>
      </Requests>
      <h5>اعضا</h5>
      <Users>{users}</Users>
    </Container>
  );
}
