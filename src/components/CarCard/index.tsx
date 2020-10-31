import React from 'react';

import BookmarkIcon from '../../assets/bookmark.svg';
import SpeedometerIcon from '../../assets/speedometer.svg';

import {
  Container,
  ImageContainer,
  CardContent,
  ContentHeader,
  ContentFooter,
} from './styles';

const CarCard = (): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <button type="button">
          <img src={BookmarkIcon} alt="bookmark" />
        </button>
      </ImageContainer>
      <CardContent>
        <ContentHeader>
          <p>VOLKSWAGEN FOX</p>
          <strong>R$25.085,00</strong>
        </ContentHeader>
        <ContentFooter>
          <p>2011</p>
          <span>
            <img src={SpeedometerIcon} alt="speedometer" />
            <p>131313 Km</p>
          </span>
          <p>Gasolina</p>
        </ContentFooter>
      </CardContent>
    </Container>
  );
};

export default CarCard;
