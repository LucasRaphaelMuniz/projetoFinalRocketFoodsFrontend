import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;
  padding: 2.9rem 2.8rem;

  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  position: fixed;
  bottom: 0;

  padding: 10px;
  z-index: 2005;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: 1024px) {
    padding: 2.4rem 12.3rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 14.2rem;
  }

  @media (min-width: 1024px) {
    > img {
      width: 18.6rem;
    }
  }
`;

export const Copyright = styled.span`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;