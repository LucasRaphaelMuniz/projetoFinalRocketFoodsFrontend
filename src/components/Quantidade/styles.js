import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.4rem;
  

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.2rem;


  button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: filter 0.2s;

    font-size: 2.2rem;


    &:hover {
      filter: brightness(0.9);
    }
  }

`;