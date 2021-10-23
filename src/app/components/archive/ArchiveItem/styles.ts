import { PanelBox } from "src/styles/components";
import styled from "styled-components";

export const StyledArchiveItem = styled(PanelBox)`
  padding: 0;
  display: grid;
  /* margin-right: 1vw; */
  margin-bottom: 1vw;
  margin-left: 1vw;
  grid-template-rows: 1fr;
  width: fit-content;
  border-radius: 15px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
`;

export const Bottom = styled.div`
  margin: 10px;
`;

export const SenderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SenderTextContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-left: 10px;
  text-align: left;
  h5 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: gray;

    span {
      color: ${(props) => props.theme.main};
    }
  }
`;

export const SenderImage = styled.img`
  border-radius: 10px;
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: 0 1px;
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-top: 6vh;
  justify-content: flex-end;
  align-items: center;
`;

export const Top = styled.div`
  border-radius: 15px 15px 0 0;
  height: 15vh;
  background-color: #c4c4c4;
`;
