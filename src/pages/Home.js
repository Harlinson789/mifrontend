// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 10px 6px;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 4px;
`;

const Subtitle = styled.h5`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 6px;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const WelcomeSection = styled.div`
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-image: url('/agroclick.png');
  background-size: cover;
  background-position: center;
`;

const WelcomeText = styled.h3`
  color: white;
  font-size: 3xl;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ServicesSection = styled.div`
  padding: 6px;
  text-align: center;
`;

const Footer = styled.div`
  background-color: green.100;
  padding: 4px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: small;
  color: gray.500;
`;

const Home = () => {
  return (
    <Container>
      <Title>Agro Click</Title>
      <Subtitle>Conectando la agricultura con la tecnología</Subtitle>
      <StyledButton>¡Haz clic aquí!</StyledButton>

      <WelcomeSection>
        <WelcomeText>Bienvenidos a Agro Click</WelcomeText>
      </WelcomeSection>

      <ServicesSection>
        <Title as="h2">Nuestros Servicios</Title>
        <Subtitle>
          Aquí puedes agregar información sobre los servicios o productos relacionados con la agricultura y la tecnología que ofrece Agro Click.
        </Subtitle>
      </ServicesSection>

      <Footer>
        <FooterText>© 2024 Agro Click. Todos los derechos reservados.</FooterText>
      </Footer>
    </Container>
  );
};

export default Home;
