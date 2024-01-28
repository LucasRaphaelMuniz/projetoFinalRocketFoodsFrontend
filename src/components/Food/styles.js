import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
  height: 29.2rem;
  max-width: 21rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 1rem;
  padding: 2.4rem;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1.2rem;



  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    height: 2.4rem;
    
  }

  > img {
    max-width: 8.8rem;
  }

  > span {
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: 'Roboto', sans-serif;

  }
`

export const Title = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;

    width: 100%;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`