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
    

`