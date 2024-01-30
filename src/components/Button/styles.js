import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 4.8rem;
    border: 0;
    padding: 0 12px;
    border-radius: 10px;
    font-weight: 500;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    &:disabled {
        opacity: 0.5;
    }

    


`;