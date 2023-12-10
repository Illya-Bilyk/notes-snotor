import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Container } from 'react-bootstrap';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Container as="header" fluid className="p-0 mb-3">
        <AppBar />
      </Container>
      <Container as="main">
        <Outlet />
      </Container>
      <Container as="footer" fluid className="bg-dark position-fixed bottom-0">
        <Footer />
      </Container>
    </>
  );
};
