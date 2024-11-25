import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'; // Asegúrate de importar styled desde styled-components
import { theme } from './theme';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
