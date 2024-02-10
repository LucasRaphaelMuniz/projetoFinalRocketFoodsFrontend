import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-left: 1.4rem;
  flex-grow: 1;
  border-radius: 0.5rem;


  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  margin: 0;
  margin-bottom: 3.6rem;
  
  
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: 1.5rem;
    
  }


`;