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
    margin-top: -3rem;
    border-radius: 50%;
  }

  img {
      max-width: 8.8rem;
      margin-top: -5rem;
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
      @media (min-width: 1024px) {
        width: 3rem;
        height: 3rem;
        top: -1rem;
        right: -11rem;
      }
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
      @media (min-width: 1024px) {
        top: -7rem;
        right: -12rem;
      }
    }
  }
  > span {
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;

    @media (min-width: 1024px) {
      font-size: 3.2rem;
      display: flex;
      margin-top: 1rem;
    }
  }

  .formatDesktop {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  border-radius: 0.5rem;

  > h3 {
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    height: 46.2rem;
    width: 30rem;
    min-width: 30rem;

    font-size: 1.6rem;
    .image-link > img {
      max-width: 17.6rem;
    }
    img {
      max-width: 17.6rem;
      margin-top: -5rem;
    }
  }
`;

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

    @media (min-width: 1024px) {
      font-size: 2.4rem;
    }
  }
`;
