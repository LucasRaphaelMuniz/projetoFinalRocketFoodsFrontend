import styled from 'styled-components';

export const Container = styled.header`

    display: flex;
    position: sticky;
    top: 0;
    z-index: 1000;
    align-items: center;
    padding: 3rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700}; 

`