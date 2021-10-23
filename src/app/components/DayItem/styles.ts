import styled from "styled-components";

interface ContainerProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  background-color: ${(props) => (props.active ? "#92BFC5" : props.theme.main)};
  width: fit-content;
  height: 30vh;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 1vw;
  @media screen and (max-width: 1024px) {
    position: relative;
    background-color: ${(p) => (p.active ? "#92BFC5" : p.theme.main)};
    height: 30vh;
    border-radius: 10px;
    overflow: hidden;
  }
`;

interface CircleProps {
  big: boolean;
  medium: boolean;
  active: boolean;
}
export const Circle = styled.div<CircleProps>`
  position: absolute;
  width: ${(p) => (p.big ? "12vw" : p.medium ? "9vw" : "6vw")};
  height: ${(p) => (p.big ? "12vw" : p.medium ? "9vw" : "6vw")};
  border-radius: 50%;
  border: solid 15px ${(p) => (p.active ? "#B4CBB2" : "#373363")};
  bottom: ${(p) => (p.big ? "-50%" : p.medium ? "5%" : "75%")};
  left: ${(p) => (p.big ? "-65%" : p.medium ? "70%" : "30%")};
  margin: 0;

  @media screen and (max-width: 1024px) {
    width: ${(p) => (p.big ? "12vw" : p.medium ? "9vw" : "6vw")};
    height: ${(p) => (p.big ? "12vw" : p.medium ? "9vw" : "6vw")};
    border-radius: 50%;
    border: solid 10px ${(p) => (p.active ? "#B4CBB2" : p.theme.second)};
    bottom: ${(p) => (p.big ? "-35%" : p.medium ? "5%" : "75%")};
    left: ${(p) => (p.big ? "-65%" : p.medium ? "70%" : "30%")};
  }

  @media screen and (max-width: 400px) {
    width: ${(p) => (p.big ? "12vw" : p.medium ? "9vw" : "6vw")};
    height: ${(p) => (p.big ? "12vw" : p.medium ? "9vw" : "6vw")};
    border-radius: 50%;
    border: solid 10px ${(p) => (p.active ? "#B4CBB2" : p.theme.second)};
    bottom: ${(p) => (p.big ? "0%" : p.medium ? "5%" : "75%")};
    left: ${(p) => (p.big ? "-65%" : p.medium ? "70%" : "30%")};
  }
`;

export const ProfileImg = styled.img`
  border-radius: 5px;
  width: 2.5vw;
  height: 2.5vw;
  object-fit: cover;
`;

export const Top = styled.div`
  flex: 1;
  position: relative;
  color: white;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 3fr;
  text-align: right;
  z-index: 2;
  h5 {
    width: 100%;
    font-size: 9px;
  }
  p {
    font-size: 8px;
  }
`;

export const Center = styled.div`
  flex: 3;
  z-index: 2;
  margin: 5px 0;
  color: white;
  overflow: hidden;
  h6 {
    font-size: 8px;
    font-family: "dana-regular";
  }
  p {
    font-size: 8px;
  }
  max-height: 50%;
`;

export const Bottom = styled.div`
  flex: 1;
  color: white;
  z-index: 2;
  text-align: center;
  h6 {
    font-size: 8px;
  }
  p {
    font-size: 8px;
  }
`;
