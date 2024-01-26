import styled from "@emotion/styled";

export const Item = styled.p`
  padding: 20px;
  text-align: center;

  font-weight: ${(props) => props.theme.weight.semibold};

  border-bottom: 1px solid ${(props) => props.theme.color.lightgray};

  &:hover {
    background-color: ${(props) => props.theme.color.lightgray};
  }
`;

export const Select = styled.select``;
