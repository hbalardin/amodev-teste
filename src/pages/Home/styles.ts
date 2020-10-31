import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 90vw;

  @media (min-width: 700px) {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.2rem;
  }

  @media (min-width: 1100px) {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.2rem;
  }

  @media (min-width: 1600px) {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3.2rem;
  }
`;
