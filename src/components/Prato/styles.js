import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3.2rem;

  .pratoImage {
    width: 26.4rem;
    margin-bottom: 1.6rem;
  }

  div {
    > h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 2.7rem;
      margin-bottom: 1.6rem;
    }

    > h2 {
      font-family: "Poppins", sans-serif;
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
      width: 35rem;
      margin: 5rem auto;
      align-items: baseline;
      gap: 1.6rem;
    }

    .admin {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4.7rem;
    margin-top: 4.2rem;
    margin-left: 10rem;
    .pratoImage {
      width: 38.9rem;
    }

    div {
      justify-content: flex-end;

      .seu-contenedor {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 3.2rem;
        gap: 1.6rem;
        width: 35rem;
        border-radius: 5px;
        flex-direction: row;
        align-items: baseline;
        margin: 5rem 0;
      }

      .botaoEditar {
        max-width: 13.1rem;
      }

      .admin {
        display: block;
      }

      > h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 4.7rem;
        text-align: left;
      }

      > h2 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 2.8rem;
        text-align: left;
      }
      > section {
        justify-content: flex-start;
      }
    }
  }
`;
