import { useState } from "react";
import { Nav, Container, Navbar, Button, Modal } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const NavbarComp = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAktivitasClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src="src/assets/img/SeniBudayaLogo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{fontWeight: 'bold'}}>
              <Nav.Link href="/beranda">Beranda</Nav.Link>
              <Nav.Link onClick={handleAktivitasClick}>Aktivitas</Nav.Link>
              <Nav.Link href="/katamereka">Kata Mereka</Nav.Link>
              <Nav.Link href="/kontak">Kontak</Nav.Link>
            </Nav>
            <div>
              <Button href="/login" variant="warning">
                Masuk <BsArrowRight />
              </Button>{" "}
              <Button href="/daftar" variant="outline-warning">
                Daftar
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Popup register */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ background: "#F0ECCF" }}>
        </Modal.Header>
        <Modal.Body style={{ background: "#F0ECCF" }}>
          <Modal.Title style={{ color: "#454411", textAlign: 'center' }}>BELUM MEMILIKI AKUN?</Modal.Title>
          <Modal.Footer style={{ background: "#F0ECCF", justifyContent: "center" }}>
            <Button variant="warning" href="/daftar" style={{ boxShadow: '12px 15px 18px rgba(0, 0, 0, 0.2)'}}>
              DAFTAR AKUN
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavbarComp;
