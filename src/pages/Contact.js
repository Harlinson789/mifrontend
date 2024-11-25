import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const Contact = () => {
  return (
    <Container>
      <Title>Contacto</Title>
      <p>Formulario de contacto para que los usuarios puedan comunicarse con Agro Click.</p>
    </Container>
  );
};

export default Contact;
