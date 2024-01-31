import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    display: grid;    

    grid-template-rows: 10rem auto 10rem;
    grid-template-areas: 
    "header"
    "Content"
    "footer";

    


`;



export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3.6rem;


    button {
      width: 100%;
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      
      font-weight: 300;
    }



`