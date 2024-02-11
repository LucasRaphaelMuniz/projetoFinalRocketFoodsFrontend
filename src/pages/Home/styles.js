import styled from 'styled-components';


export const Container = styled.div`
    display: grid;
    

    grid-template-rows: 10rem auto 10rem;
    grid-template-areas: 
    "header"
    "Content"
    "footer";


    > main> div {
      width: 100vw;
      margin: 4.8rem auto;
    
      header {
        height: 12rem;
        margin-inline: 1.2rem;


        display: flex;
        flex-direction: column;
        align-items: flex-end;

        background:${({ theme }) => theme.COLORS.GRADIENT_200};
        border-radius: 0.3rem;
        margin-bottom: -5rem;

        
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

    @media (min-width: 1024px) {

      

      > main> div {
        
      header {
        display: flex;
        height: 26rem;
        margin-inline: 1.2rem;
        margin: 10rem;
        margin-bottom: -5rem;
        z-index: 1003;


        img {
          width: 45.1rem;

        }

        div {
          width: 100%;
          display: flex;
          flex-direction: column;       
          margin-top: 2rem;
          top: 3.6rem;
          left: 10rem;

          
          h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 5rem;
            line-height: 140%;

          }

          p {
            font-size: 1.7rem;
            font-weight: 400;
            font-family: "Poppins", sans-serif;
            

          }
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
        overflow-x: scroll;
        height: 29.2rem;
        scrollbar-width: none;


    }
          


    @media (min-width: 1024px) {

      margin-left: 10rem;
      margin-right: 10rem;
      
      
      colunas-container{
        height: 48.2rem;
        margin-left: 10rem;
        margin-right: 10rem;     
        display: flex;
        flex-direction: row;
      
        
        
      }   
      .setaEsquerda1 > img {
        width: 1.5rem;
        position: absolute;
        top: 80rem;
        left: 13rem;
        z-index: 1010;
      }

      .setaEsquerda2 > img {
        width: 1.5rem;
        position: absolute;
        top: 141rem;
        left: 13rem;
        z-index: 1010;
      }

      .setaEsquerda3 > img {
        width: 1.5rem;
        position: absolute;
        top: 203rem;
        left: 13rem;
        z-index: 1010;
      }

      .setaDireita1 > img {
        width: 1.5rem;
        position: absolute;
        top: 80rem;
        right: 13rem;
        z-index: 1010;
      }
      .setaDireita2 > img {
        width: 1.5rem;
        position: absolute;
        top: 141rem;
        right: 13rem;
        z-index: 1010;
      }
      .setaDireita3 > img {
        width: 1.5rem;
        position: absolute;
        top: 203rem;
        right: 13rem;
        z-index: 1010;
      }

      section > h2 {
        position: relative;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        margin-left: 10rem;
        z-index: 1009;


        color: ${({ theme }) => theme.COLORS.GRAY_200};
        margin-bottom: 2.4rem;
      }
      
      

      colunas-container::before,
      colunas-container::after {
        content: '';
        position: fixed;
        top: 0;
        bottom: 0;
        width: 22.4rem;
        z-index: 1002;
        pointer-events: none;
      }

      colunas-container::before {
        left: 6rem;
        background: linear-gradient(90deg, rgba( 0, 10, 15, 27) 0%, rgba( 0, 10, 15, 0) 100%);
      }

      colunas-container::after {
        right: 6rem;
        background: linear-gradient(90deg, rgba( 0, 10, 15, 0) 0%, rgba( 0, 10, 15, 27.25) 100%);
      }

    

      
  }

`

