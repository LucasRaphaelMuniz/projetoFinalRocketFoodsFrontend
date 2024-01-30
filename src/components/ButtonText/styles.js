import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;


  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 2.4rem;


  color: ${({ theme }) => theme.COLORS.LIGHT_300};


`;
