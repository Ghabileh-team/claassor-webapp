import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles";
import logo from "../assets/claassor-white.png";
export default function Header() {
  const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1vw;
    z-index: 999;
  `;
  const List = styled.ul`
    list-style: none;
    display: flex;
    text-align: center;
    a {
      margin: 0.5em 0.5em;
      padding: 0.25em 0.5em;
      color: white;
      font-size: 1em;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        text-shadow: 0 0 3px white;
      }
    }
    li {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  const ClaassorLogo = styled.img`
    width: 12vw;
    object-fit: contain;
    z-index: 999;
  `;
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
          <Link>درباره کلاسور</Link>
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
