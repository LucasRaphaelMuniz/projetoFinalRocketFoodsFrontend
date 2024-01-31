import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    display: grid;
    

    grid-template-rows: 10rem auto 10rem;
    grid-template-areas: 
    "header"
    "Content"
    "footer";

    .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
 
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
    padding: 0.8rem;
    border-radius: 0.8rem;
    
    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    input {
      background-color: transparent;
    }
  }


 
    

`;



export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.2rem 3.2rem 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;




    img {
        font-size: 1.6rem;
        margin-right: 1rem;
    }

    h1 {
        height: 4.5rem;
    }

    section {
    margin-top: -0.8rem;


    .changeColor {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        
    }

    }

    .changeColorButton {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        
    }

    

`

export const Image = styled.div`
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > label {
    display: flex;
    gap: 0.8rem;
    cursor: pointer;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: calc(100vw - 16rem);
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;

      width: 100%;
    }

    svg, span {
      transition: filter 0.2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.9);
      }
    }
  }

  @media (min-width: 1024px) {
    > label {
      span {
        max-width: 13.3rem;
      }
      
      input {
        max-width: 22.9rem;
      }
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;

    select {
      border: none;
      cursor: pointer;

      
      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: 0.8rem;
      
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
    }
    
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      position: absolute;
      top: 0;
      right: 1.6rem;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`;
