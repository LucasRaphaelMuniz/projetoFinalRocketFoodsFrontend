import styled from "styled-components";

export const Container = styled.footer`

  display: flex;
  height: 29.2rem;
  min-width: 21rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  padding: 2.4rem;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  gap: 0.5rem;



  .image-link > img {
    max-width: 8.8rem;
  }
  img {
    max-width: 8.8rem;
  }

  section {
    display: block;

    > svg {
      width: 2.4rem;
      height: 2.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      z-index: 1000;
      position: relative;

      top: 1.3rem;
      right: -7rem;
    }
    

    
    }

  > a {
    position: relative;

    > svg {
    width: 2.4rem;
    height: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    z-index: 1000;
    position: relative;
    top: -3rem;
    right: -7rem;

    
    }

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