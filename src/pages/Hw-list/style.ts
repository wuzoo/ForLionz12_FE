import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin-top: 40px;
`;

export const Margin = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;

export const FullWidthContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const AlignWrapper = styled.div`
  width: 98%;
  ${(props) => props.theme.flexRow("space-between", "end")}
`;

export const OtherHWContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    & > div {
      min-width: 400px;
      min-height: 400px;
    }
  }
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(1, 1fr);
    & > div {
      min-height: 500px;
      min-width: 500px;
    }
  }
`;
