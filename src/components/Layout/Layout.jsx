import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Container } from 'react-bootstrap';

export const Layout = () => {
  return (
    <>
      <Container as="header" fluid className="p-0 mb-3">
        <AppBar />
      </Container>
      <Container as="main">
        <Outlet />
      </Container>
    </>
  );
};
