import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3.2rem;
    overflow-x: auto;



    > img {
        width: 26.4rem;
        margin-bottom: 1.6rem;
    }

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 2.7rem;
        margin-bottom: 1.6rem;

    }

    > h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;

    }

    > section {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      flex-wrap: wrap;
      gap: 2.4rem;

    }

    


    .seu-contenedor {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 3.2rem;
        gap: 1.6rem;
        width: 35rem;
        border-radius: 5px;
        }

        .admin {
        display: block; 
        }

`;