import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import logo from "../assets/whiteTextLogo.png";

export default function NavigationBar(): JSX.Element {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" className="px-3">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="DROVE logo" className="navbarLogo" />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/home">Irányítópult</Nav.Link>
                    <Nav.Link href="/help">Segítség</Nav.Link>
                    <NavDropdown title="userId">
                        <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
                        <NavDropdown.Item href="/settings">Beállítások</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Kijelentkezés</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}
