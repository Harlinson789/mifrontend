import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const About = () => {
  return (
    <Container>
      <Title>Sobre Nosotros</Title>
      <p>Información sobre la misión, visión y el equipo detrás de Agro Click.</p>
    </Container>
  );
};

export default About;
