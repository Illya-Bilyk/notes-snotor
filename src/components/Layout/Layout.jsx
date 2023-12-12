import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Container } from 'react-bootstrap';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <Container
      fluid
      className="p-0 d-flex flex-column justify-content-between"
      style={{ height: '100vh' }}
    >
      <div>
        <Container as="header" fluid className="p-0 mb-3">
          <AppBar />
        </Container>
        <Container as="main" className="p-2">
          <Outlet />
        </Container>
      </div>
      <Container as="footer" fluid className="page-footer bg-dark">
        <Footer />
      </Container>
    </Container>
  );
};
