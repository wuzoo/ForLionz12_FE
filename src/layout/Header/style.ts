import styled from "@emotion/styled";

export const Wrapper = styled.div<{ type?: string }>`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: ${(props) => (props.type === "login" ? "center" : "start")};
  align-items: center;
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
  display: flex;
  justify-content: start;
  align-items: center;

  a:not(:first-child) {
    text-align: start;
    padding-right: 3rem;
  }
  a:nth-child(2) {
    padding-left: 2rem;
  }
  a {
    span {
      position: relative;
    }
  }
`;

export const headerprofile = styled.div<{ show: boolean }>`
  position: absolute;
  cursor: pointer;
  right: 40px;
  padding: 10px;
  display: ${(props) => !props.show && "none"};

  img {
    &:hover {
      box-shadow: 0px 5px 20px ${(props) => props.theme.color.pink};
      scale: 1.05;
    }
    transition: all 0.2s ease-in-out;
  }
`;
