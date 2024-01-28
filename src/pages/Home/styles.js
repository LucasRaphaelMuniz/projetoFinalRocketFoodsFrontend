import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;


    display: grid;
    

    grid-template-rows: 10rem auto 10rem;
    grid-template-areas: 
    "header"
    "Content"
    "footer";


    > main> div {
      width: calc(100% - 2.4rem);
      margin: 4.8rem auto;
    
      header {
        height: 12rem;
        margin-inline: 1.2rem;


        display: flex;
        flex-direction: column;
        align-items: flex-end;

        background:${({ theme }) => theme.COLORS.GRADIENT_200};
        border-radius: 0.3rem;
        
        position: relative;

        img {
          width: 19.1rem;

          position: absolute;
          left: -3rem;
          bottom: 0;
        }

        div {
          width: 20.2rem;
          position: absolute;
          top: 3.6rem;
          right: 2.1rem;

          color: ${({ theme }) => theme.COLORS.GRAY_200};

          align-items: center;
          margin-right: 3rem;

          h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1.8rem;

          }

          p {
            font-size: 1.2rem;
            font-weight: 400;
            font-family: "Poppins", sans-serif;

          }
        }
      }
    }


`;



export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 6.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;
    padding: 1.6rem;

    colunas-container{
        display: flex;
        gap: 1.6rem;
        overflow-x: auto;
        height: 29.2rem;
        max-width: 21rem;
        min-width: 100%;
    }

`