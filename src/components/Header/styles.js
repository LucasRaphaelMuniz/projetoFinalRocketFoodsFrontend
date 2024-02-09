import styled from 'styled-components';

export const Container = styled.header`
    
    background-color: ${({ theme }) => theme.COLORS.DARK_700}; 
    width: 42.8rem;
    height: 11.4rem;

    grid-area: header;
    justify-content: space-between;
    height: 10rem;
    width: 100%;
    padding: 5.6rem 2.8rem 2.4rem;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1000;
    
    gap: 3.8rem;

   
    
    > section {
        display: flex;
        gap: 0.8rem;
        justify-content: center;
        align-items: center;
        justify-content: center;


    }

    > section > img {
        width: 2.4613rem;
        height: 2.4613rem;
        flex-shrink: 0;
    }

    > section > h1 {
        color: var(--Light-Light-100, #FFF);
        font-family: Roboto;
        font-size: 2.1163rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    > section > h2 {
        color: var(--Tints-Cake-200, #82F3FF);

        /* Roboto/Smallest regular */
        font-family: Roboto;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 1.92rem */
    }

    .div {
    position: relative;
    display: inline-block;
    
    }

    .carrinhoQtde > img {
        display: block;
    }

    .carrinhoQtde > span {
        position: relative;
        width: 2.5rem;
        height: 2.5rem; 
        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2rem;
        top: -3.5rem;
        right: -1.2rem;

    }
    
    
`