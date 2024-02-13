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
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const OtherHWContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  width: 100%;

  /* @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;
