import { Container, Navbar } from "react-bootstrap";

const NavbarComp3 = () => {
  return (
    <div>
      <Navbar style={{background: '#F0ECCF'}}>
        <Container>
          <Navbar.Brand href="/beranda">
            <img src="src/assets/img/logoo2.png" width="50%" height="auto" alt="" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp3;
