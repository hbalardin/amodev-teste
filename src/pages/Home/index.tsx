import React from 'react';
import CarCard from '../../components/CarCard';

import { Container, Content } from './styles';

const Home = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <CarCard />
        <CarCard />
        <CarCard />
      </Content>
    </Container>
  );
};

export default Home;
