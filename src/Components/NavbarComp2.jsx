import { Nav, Container, Navbar } from "react-bootstrap";

const NavbarComp2 = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src="src/assets/img/SeniBUdayaLogo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{fontWeight: 'bold'}}>
              <Nav.Link href="/beranda">Beranda</Nav.Link>
              <Nav.Link href="/aktivitas">Aktivitas</Nav.Link>
              <Nav.Link href="/katamereka">Kata Mereka</Nav.Link>
              <Nav.Link href="/akunanda">Akun Anda</Nav.Link>
              <Nav.Link href="/kontak">Kontak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp2;
