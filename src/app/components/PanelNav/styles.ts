import { Link } from "react-router-dom";
import { PanelBox } from "src/styles/components";
import styled from "styled-components";

export const NavContainer = styled(PanelBox)`
  flex: 1;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 20px;
  height: 74vh;
  margin-top: 3vh;
  ul {
    list-style: none;
    text-align: right;
    font-family: "dana-bold";
    color: #a7a7a7;
    li {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #a7a7a7;
        border-radius: 10px;
        margin-bottom: 1vh;
        padding: 1vh 2vh;
      }
    }

    a.selected {
      background: linear-gradient(94.84deg, #218ca5 13.78%, #1b164a 74.9%),
        #1b164a;
      color: white;
    }
    @media screen and (max-width: 1024px) {
      a {
        font-size: 0.7em;
      }
    }
    @media screen and (max-width: 720px) {
      a {
        font-size: 0.6em;
      }
    }
    @media screen and (max-width: 420px) {
      a {
        font-size: 0.5em;
      }
    }
  }
`;

export const LogoutBtn = styled.div`
  display: flex;
  color: #a7a7a7;
  justify-content: flex-end;
  padding: 1vh 2vh;
  cursor: pointer;
  align-items: center;
  p {
    font-family: "Dana-bold";
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
