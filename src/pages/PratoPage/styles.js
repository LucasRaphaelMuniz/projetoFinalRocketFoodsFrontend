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
    flex-direction: row;
    gap: 2.4rem;
    margin: 3.2rem 3.2rem 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;


    img {
        width: 2.2rem;
    }

`