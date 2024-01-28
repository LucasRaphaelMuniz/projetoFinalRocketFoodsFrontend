import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
    font-weight: 400;
    text-align: left;
    margin-bottom: 0.8rem;
  }
`;