import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.6rem;
  padding: 0.5rem 1.4rem;
  border-radius: 5px;
  margin-right: 0.6rem;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
