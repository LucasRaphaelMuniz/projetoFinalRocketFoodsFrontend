import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    justify-content: space-between;

    height: 10rem;
 
    padding: 5.6rem 2.8rem 2.4rem;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1000;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_700}; 

    > div {
        display: flex;
        margin-right: auto;

        > img {
            margin-right: 1.6rem;
        }
        
    }
`