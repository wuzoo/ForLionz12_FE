import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IHeader } from "./types";

export const Wrapper = styled.div<IHeader>`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: ${(props) => (props.type === "login" ? "center" : "start")};
  align-items: center;
  padding: 0px 40px;
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
`;

export const headerprofile = styled.div<{ show: boolean }>`
  position: absolute;
  right: 40px;

  display: ${(props) => !props.show && "none"};
`;
