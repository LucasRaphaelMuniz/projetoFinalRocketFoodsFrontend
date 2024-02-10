import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 3.2rem;

  background-color: ${({ theme, isNew }) => (isNew ? "transparent" : theme.COLORS.LIGHT_600)};

  color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;


  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
    color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};



  }

  > input {
    width: 100%;
    max-width: 13rem;
    height: 3.2rem;
    padding: 1rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    
  }
  
`;