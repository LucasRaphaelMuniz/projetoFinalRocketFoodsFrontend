import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    height: 4.8rem;
    width: 100%;

    padding: 1.2rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;
    border-radius: 0.8rem;
  }
`;
