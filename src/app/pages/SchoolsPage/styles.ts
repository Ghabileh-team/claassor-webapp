import styled from "styled-components";

interface Props {
  light?: boolean;
  big?: boolean;
  medium?: boolean;
}
export const Wrapper = styled.div<Props>`
  position: absolute;
  right: ${(props) =>
    props.light
      ? props.big
        ? "60%"
        : props.medium
        ? "68%"
        : "60%"
      : props.big
      ? "20%"
      : props.medium
      ? "28%"
      : "20%"};
  top: ${(props) => (props.big ? "25%" : props.medium ? "58%" : "30%")};
  transform: rotate(
    ${(props) => (props.big ? "10deg" : props.medium ? "-15deg" : "-45deg")}
  );
`;

export const Triangle = styled.div<Props>`
  width: ${(props) => (props.big ? "18vw" : props.medium ? "10vw" : "8vw")};
  height: ${(props) => (props.big ? "18vw" : props.medium ? "10vw" : "8vw")};
  position: relative;
  border-top-right-radius: 35%;
  background-color: ${(props) =>
    props.light ? props.theme.light : props.theme.main};
  opacity: ${(props) => (props.big ? "0.7" : props.medium ? "0.5" : "1")};
  text-align: left;
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: inherit;
  }
  &:before,
  &:after {
    width: ${(props) => (props.big ? "18vw" : props.medium ? "10vw" : "8vw")};
    height: ${(props) => (props.big ? "18vw" : props.medium ? "10vw" : "8vw")};
    border-top-right-radius: 35%;
  }

  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`;
