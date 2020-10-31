import React from 'react';
import CarCard from '../../components/CarCard';

import { Container, Content } from './styles';

import CarImg from '../../assets/volkswagen-fox.jpg';

const Home = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <CarCard
          name="VOLKSWAGEN FOX"
          year="2011"
          km="131313"
          price="R$25.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN GOL"
          year="2012"
          km="151501"
          price="R$20.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN FOX"
          year="2011"
          km="131313"
          price="R$25.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN GOL"
          year="2012"
          km="151501"
          price="R$20.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN FOX"
          year="2011"
          km="131313"
          price="R$25.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN GOL"
          year="2012"
          km="151501"
          price="R$20.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN FOX"
          year="2011"
          km="131313"
          price="R$25.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN GOL"
          year="2012"
          km="151501"
          price="R$20.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN FOX"
          year="2011"
          km="131313"
          price="R$25.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN GOL"
          year="2012"
          km="151501"
          price="R$20.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN FOX"
          year="2011"
          km="131313"
          price="R$25.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN GOL"
          year="2012"
          km="151501"
          price="R$20.080,00"
          image={CarImg}
        />
        <CarCard
          name="VOLKSWAGEN FOX"
          year="2011"
          km="131313"
          price="R$25.080,00"
          image={CarImg}
        />
      </Content>
    </Container>
  );
};

export default Home;
