import React, { useState, ReactElement } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import Header from "src/app/components/Header";
import { Button, Input, Showcase } from "src/styles/components";
import { Title } from "./styles";
import FormComponent from "./components/FormComponent";

const Parse = require("parse");

export default function Login() {
  const [active, setActive] = useState(true);
  const [hide, setHide] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <Showcase>
      <Header />
      <FormComponent
        hide={hide}
        first={first}
        second={second}
        third={third}
        setFirst={setFirst}
        setSecond={setSecond}
        setThird={setThird}
        setHide={setHide}
        active={active}
        setActive={setActive}
      />
      <div className={`title ${hide ? "hide" : ""}`}>
        عضویت در
        <br /> کلاسور
      </div>
    </Showcase>
  );
}
