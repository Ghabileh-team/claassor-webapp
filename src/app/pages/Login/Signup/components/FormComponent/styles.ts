import styled from "styled-components";

interface Props {
  className: string | null;
}

export const StyledLoginPage = styled.div<Props>`
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
  }

  .tabbar {
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-bottom: 2vh;
    .tab {
      color: #ffffff;
      cursor: pointer;
      margin: 0.5em 1em;
      padding: 0.5em 0.5em;
      &.active {
        border-bottom: solid 2px ${(props) => props.theme.light};
      }
      font-family: "Kalameh-bold";
    }
  }

  .title {
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
  }
  .form-container {
    display: flex;
    flex-direction: column;
    margin-top: 3vw;
  }
`;
