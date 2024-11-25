import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const Services = () => {
  return (
    <Container>
      <Title>Servicios</Title>
      <p>Descripción detallada de los servicios que ofrece Agro Click.</p>
    </Container>
  );
};

export default Services;
