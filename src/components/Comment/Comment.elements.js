import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1vw 2vw;
`;
export const Container = styled.div`
  display: flex;
  width: 70%;
  margin-left: 1vw;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: ${(props) => (props.isBig ? "80px" : "50px")};
  height: ${(props) => (props.isBig ? "80px" : "50px")};
  object-fit: cover;
  object-position: 0 1px;
  margin-right: 1vw;
`;

export const TextContainer = styled.div`
  text-align: right;

  h4 {
    text-align: left;
    span {
      color: gray;
      font-size: 10px;
      margin-left: 5px;
    }
  }
  p {
    text-align: right;
  }
`;
