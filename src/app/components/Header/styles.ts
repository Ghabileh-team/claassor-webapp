import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1vw;
    z-index: 999;
  `;

export const List = styled.ul`
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

export const ClaassorLogo = styled.img`
    width: 12vw;
    object-fit: contain;
    z-index: 999;
  `;
