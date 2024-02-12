import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  margin-top: 2rem;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.6546rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;
