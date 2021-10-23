import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  light?: boolean;
  gray?: boolean;
  transparent?: boolean;
  li?: boolean;
  blue?: boolean;
  lightText?: boolean;
}
export const Button = styled.button<ButtonProps>`
  display: inline-block;
  border-radius: 5px;
  border: 2px solid
    ${(p) =>
      p.light
        ? p.theme.light
        : p.transparent
        ? "transparent"
        : p.gray
        ? p.theme.gray
        : p.theme.main};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  margin-top: ${(p) => (p.li ? "0.75em" : null)};
  background-color: ${(p) =>
    p.light
      ? p.theme.main
      : p.transparent
      ? "transparent"
      : p.blue
      ? p.theme.blue
      : p.gray
      ? p.theme.gray
      : p.theme.light};
  color: ${(p) =>
    p.light || p.transparent ? "#ffffff" : p.lightText ? "#fff" : "#000000"};
  font-size: 1em;
  outline: none;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-family: "Kalameh-bold";
  &:hover {
    transition: 0.3s ease-out;
    background-color: ${(p) => (p.light ? p.theme.light : p.theme.main)};
    color: ${(p) => (p.light ? p.theme.main : p.theme.light)};
    border: 2px solid ${(p) => (p.light ? p.theme.main : p.theme.light)};
    box-shadow: 0 0 5px ${(p) => (p.light ? p.theme.main : p.theme.light)};
  }
`;

interface InputProps {
  light?: boolean;
}
export const Input = styled.input<InputProps>`
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

interface HeroSectionProps {
  light?: boolean;
}
export const HeroSection = styled.div<HeroSectionProps>`
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

interface CircleProps {
  big?: boolean;
  medium?: boolean;
  light?: boolean;
}
export const Circle = styled.div<CircleProps>`
  width: ${(p) => (p.big ? "50vh" : p.medium ? "35vh" : "20vh")};
  height: ${(p) => (p.big ? "50vh" : p.medium ? "35vh" : "20vh")};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(p) => (p.light ? p.theme.main : p.theme.light)};
  position: absolute;
  right: ${(p) =>
    p.light
      ? p.big
        ? "-3%"
        : p.medium
        ? "-5%"
        : "0%"
      : p.big
      ? "60%"
      : p.medium
      ? "58%"
      : "63%"};
  top: ${(p) => (p.big ? "50%" : p.medium ? "70%" : "30%")};
  opacity: ${(p) => (p.big ? "0.7" : p.medium ? "0.5" : "1")};
`;

interface TextProps {
  gray?: boolean;
}
export const Text = styled.h1<TextProps>`
  color: ${(props) => (props.gray ? "#a7a7a7" : "#fff")};
  font-size: 5em;
  text-align: right;
  position: absolute;
  right: 0vh;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

interface NormalTextProps {
  gray?: boolean;
}
export const NormalText = styled.h3<NormalTextProps>`
  color: ${(props) => (props.gray ? "#a7a7a7" : "#fff")};
  text-align: right;
  font-family: "dana-regular";
`;

interface NormalDescriptionProps {
  gray?: boolean;
}
export const NormalDescription = styled.p<NormalDescriptionProps>`
  text-align: right;
  font-family: "dana-regular";
  color: ${(props) => (props.gray ? "#a7a7a7" : "#fff")};
`;

interface ExampleProps {
  primary?: boolean;
}
export const Example = styled.img<ExampleProps>`
  width: 27vh;
  border: 2px solid white;
  border-radius: 25px;
  position: absolute;
  z-index: 3;
  top: ${(props) => (props.primary ? "15%" : "30%")};
  left: ${(props) => (props.primary ? "10%" : "28%")};
`;

interface BackgroundProps {
  big?: boolean;
  medium?: boolean;
}
export const Backgound = styled.div<BackgroundProps>`
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
  color: white;
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
export const PanelBox = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2vw;

  /* @media screen and (max-width: 400px) {
    padding: 2vh;
  } */
`;

interface PanelWindowProps {
  blur?: boolean;
}
export const PanelWindow = styled.div<PanelWindowProps>`
  background-color: #f1f1f1;
  min-height: 100vh;
  width: 100%;
  position: relative;
  filter: ${(props) => (props.blur ? " blur(2px) " : null)};
  padding: 3vw;
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 0.5em;
    }
  }

  &:before {
    display: ${(props) => (props.blur ? null : "none")};
    content: "";
    position: absolute;
    top: -3vw;
    left: -3vw;
    width: 103%;
    height: 103%;
    background-color: black;
    opacity: 70%;
    z-index: 2;
  }
`;

export const PanelContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  padding-top: 3vh;
`;

export const PanelBigContainer = styled.div`
  display: flex;
`;

interface IconProps {
  small?: boolean;
}
export const Icon = styled.img<IconProps>`
  width: ${(props) => (props.small ? "22px" : "25px")};
  /* transform: translate(25%, 25%); */
  margin-left: 5px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.small ? "16px" : "22px")};
  }
  @media screen and (max-width: 720px) {
    width: ${(props) => (props.small ? "16px" : "20px")};
  }
  @media screen and (max-width: 420px) {
    width: ${(props) => (props.small ? "16px" : "14px")};
  }
`;

export const PanelContentContainer = styled(PanelBox)`
  flex: 2;
  background-color: transparent;
  overflow: hidden;
  padding: 0 2vw;
  @media screen and (max-width: 1024px) {
    padding: 0 1vw 0 0;
  }
`;

export const HeaderLogo = styled.img`
  width: 10vw;
  object-fit: contain;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
