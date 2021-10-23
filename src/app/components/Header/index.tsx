import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from "src/styles/components";
import logo from "src/assets/claassor-white.png";
import { ClaassorLogo, List, Navbar } from "./styles";

export default function Header(): ReactElement {
  return (
    <Navbar>
      <Link to="/">
        <ClaassorLogo src={logo} />
      </Link>
      <List>
        <li>
          <Link to="/schools">بخش مدارس</Link>
        </li>
        <li>
          <Link to="/">درباره کلاسور</Link>
        </li>
        <li>
          <Link to="/login">
            <Button onClick={() => console.log("1")} li>
              ورود| ثبت نام
            </Button>
          </Link>
        </li>
      </List>
    </Navbar>
  );
}
