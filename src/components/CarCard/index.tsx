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

interface Props {
  name: string;
  year: string;
  km: string;
  price: string;
  image: string;
}

const CarCard = ({ name, year, km, price, image }: Props): JSX.Element => {
  return (
    <Container>
      <ImageContainer image={image}>
        <button type="button">
          <img src={BookmarkIcon} alt="bookmark" />
        </button>
      </ImageContainer>
      <CardContent>
        <ContentHeader>
          <p>{name}</p>
          <strong>{price}</strong>
        </ContentHeader>
        <ContentFooter>
          <p>{year}</p>
          <span>
            <img src={SpeedometerIcon} alt="speedometer" />
            <p>{`${km} Km`}</p>
          </span>
          <p>Gasolina</p>
        </ContentFooter>
      </CardContent>
    </Container>
  );
};

export default CarCard;
