import styled from 'styled-components';

interface ImageContainerProps {
  image: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;

  height: 42rem;
  border-radius: 0.8rem;

  margin-top: 2.4rem;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  flex: 1;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  border-radius: 0.8rem 0.8rem 0 0;

  position: relative;

  button {
    position: absolute;
    bottom: 0;
    right: 0;

    background: transparent;
    border: 0;

    img {
      margin: 1.6rem;

      width: 3.6rem;
      height: 3.6rem;
    }
  }
`;

export const CardContent = styled.div`
  height: 12.8rem;
`;

export const ContentHeader = styled.div`
  height: 6.4rem;
  padding: 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 2rem;
  }

  border-bottom: 1px solid #e1e1e1;
`;

export const ContentFooter = styled.div`
  flex: 1;
  padding: 1.6rem 2.8rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    display: flex;
    align-items: center;

    img {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 0.8rem;
    }
  }
`;
