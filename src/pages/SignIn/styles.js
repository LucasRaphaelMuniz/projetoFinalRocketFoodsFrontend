import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;       



    @media (min-width: 1024px) {
    margin-inline: 13.1rem; 
    flex-direction: row;
    justify-content: space-between;
    
  }

`

export const Marca = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    > img {
        width: 100%;
        max-width: 25rem;
    }


`;

export const Form = styled.form`
    padding: 7.3rem 3.2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;       

    > a {
        margin-top: 3.2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }

    > h2 {
        display: none;
    }

    @media (min-width: 1024px) {
    padding: 6.4rem;
    border-radius: 1.6rem;

    width: 47.6rem;
    margin: auto 0;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
        


    > h2 {
      display: initial;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 3.2rem;
    }

    > section {
      margin-top: 3.2rem;
    }

  }

`