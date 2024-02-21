import styled from "@emotion/styled";

export const Wrapper = styled.div<{ type?: string }>`
  width: 100vw;
  height: 80px;
  ${(props) => props.theme.flexRow("", "center")}
  justify-content: ${(props) =>
    props.type === "login" ? "center" : "space-between"};
  padding: 0px 40px;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.color.white};
  z-index: 10;
`;

export const logo = styled.span`
  font-size: 35px;
  font-weight: 700;
`;

export const navcol = styled.div`
  ${(props) => props.theme.flexRow("start", "center")}
  width: 40vw;
  div {
    margin-left: 40px;
    display: flex;
    gap: 30px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const headerprofile = styled.div<{ show: boolean }>`
  cursor: pointer;
  display: ${(props) => !props.show && "none"};

  @media screen and (max-width: 768px) {
    display: none;
  }

  img {
    &:hover {
      box-shadow: 0px 5px 20px ${(props) => props.theme.color.pink};
      scale: 1.05;
    }
    transition: all 0.2s ease-in-out;
  }
`;
