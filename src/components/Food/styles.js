import styled from "styled-components";

export const Container = styled.footer`

  display: flex;
  height: 29.2rem;
  width: 21rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  padding: 2.4rem;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  gap: 1.2rem;



  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    width: 2.4rem;
    height: 2.2rem;
    
  }

  > img {
    max-width: 8.8rem;
  }

  > span {
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;

  }

  border-radius: 0.5rem;
  background: var(--Dark-Dark-200, #00070A);
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