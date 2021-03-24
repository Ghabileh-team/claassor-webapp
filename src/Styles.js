import styled from "styled-components";

export const theme = {
  main: "rgba(27, 22, 74, 1)",
  light: "#ffffff",
  second: "#576b88",
  blue: "#3ba1b7",
};

export const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  border: 2px solid
    ${(props) =>
      props.light
        ? props.theme.light
        : props.transparent
        ? "transparent"
        : props.theme.main};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  margin-top: ${(props) => (props.li ? "0.75em" : null)};
  background-color: ${(props) =>
    props.light
      ? props.theme.main
      : props.transparent
      ? "transparent"
      : props.blue
      ? props.theme.blue
      : props.theme.light};
  color: ${(props) =>
    props.light || props.transparent ? "#ffffff" : "#000000"};
  font-size: 1em;
  outline: none;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-family: "Kalameh-bold";
  &:hover {
    transition: 0.3s ease-out;
    background-color: ${(props) =>
      props.light ? props.theme.light : props.theme.main};
    color: ${(props) => (props.light ? props.theme.main : props.theme.light)};
    border: 2px solid
      ${(props) => (props.light ? props.theme.main : props.theme.light)};
    box-shadow: 0 0 5px
      ${(props) => (props.light ? props.theme.main : props.theme.light)};
  }
`;

export const Input = styled.input`
  outline: none;
  border: transparent;
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  font-family: "Kalameh-bold";
  border-bottom: 2px solid
    ${(props) => (props.light ? props.theme.main : props.theme.light)};
  color: ${(props) => (props.light ? props.theme.main : props.theme.light)};
  background-color: transparent;
  text-align: right;
  transition: 1s ease;
`;

export const Showcase = styled.div`
  background-color: ${(props) => props.theme.main};
  height: 80vh;
  margin-bottom: 15vh;
  &:before {
    width: 110%;
    height: 22vh;
    content: "";
    top: 76vh;
    left: -5%;
    position: absolute;
    // transform: translateX(25%);
    z-index: 2;
    transition: 0.3s ease-out;
    background-color: ${(props) => props.theme.main};
    color: black;
    border-radius: 0 0 100% 110%/0 0 100% 100%;
    // transform: scale(1);
  }
`;

export const HeroSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.light ? props.theme.light : props.theme.main};
  height: 86vh;
  margin-bottom: 20vh;
  z-index: 1;
  &:before {
    width: 110%;
    height: 20vh;
    content: "";
    top: 86vh;
    left: -5%;
    position: absolute;
    transition: 0.3s ease-out;
    background-color: ${(props) => props.theme.main};
    color: black;
    border-radius: ${(props) =>
      props.light
        ? "100% 100% 0 0/100% 100% 0 0"
        : "0 0 100% 100%/0 0 100% 100%"};
    // transform: scale(1.5);
    // transform: rotate(0.5turn);
  }
`;

export const Circle = styled.div`
  width: ${(props) => (props.big ? "50vh" : props.medium ? "35vh" : "20vh")};
  height: ${(props) => (props.big ? "50vh" : props.medium ? "35vh" : "20vh")};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) =>
    props.light ? props.theme.main : props.theme.light};
  position: absolute;
  right: ${(props) =>
    props.light
      ? props.big
        ? "-3%"
        : props.medium
        ? "-5%"
        : "0%"
      : props.big
      ? "60%"
      : props.medium
      ? "58%"
      : "63%"};
  top: ${(props) => (props.big ? "50%" : props.medium ? "70%" : "30%")};
  opacity: ${(props) => (props.big ? "0.7" : props.medium ? "0.5" : "1")};
`;

export const Navbar = styled.nav`
  float: right;
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

export const Text = styled.h1`
  color: white;
  font-size: 5em;
  text-align: right;
  position: absolute;
  right: 0vh;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const Example = styled.img`
  width: 27vh;
  border: 2px solid white;
  border-radius: 25px;
  position: absolute;
  z-index: 3;
  top: ${(props) => (props.primary ? "15%" : "30%")};
  left: ${(props) => (props.primary ? "10%" : "28%")};
`;

export const Backgound = styled.div`
  width: ${(props) => (props.big ? "55vh" : props.medium ? "35vh" : "22vh")};
  height: ${(props) => (props.big ? "55vh" : props.medium ? "35vh" : "22vh")};
  border: 2.5vh solid ${(props) => props.theme.second};
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  top: ${(props) => (props.big ? "-5vh" : props.medium ? "58vh" : "25vh")};
  left: ${(props) => (props.big ? "-8vh" : props.medium ? "-5vh" : "44vh")};
`;

export const Tabbar = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-bottom: 2vh;
`;

export const Tab = styled.div`
  color: #ffffff;
  cursor: pointer;
  margin: 0.5em 1em;
  padding: 0.5em 0.5em;
  &.active {
    border-bottom: solid 2px ${(props) => props.theme.light};
  }
  font-family: "Kalameh-bold";
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.light};
  font-size: 12em;
  text-align: right;
  position: absolute;
  right: -35vh;
  top: 50%;
  z-index: 3;
  transition: 1s ease;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 50px black;
  font-family: "Kalameh-Black";
  &.hide {
    right: -100vw;
  }
`;
export const Form = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 30vw;
  height: 30vw;
  border-radius: 2vw;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 20%;
  display: flex;
  z-index: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s ease;
  input {
    margin: 2vh;
  }
  &.center {
    left: 50%;
    width: 60vw;
    height: 45vw;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
`;
