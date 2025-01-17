import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar(): JSX.Element {
    return (
        <Container className="">
            <Navbar fixed="top" bg="dark" data-bs-theme="dark" className="bg-body-tertiary justify-content-between">
                <Navbar.Brand className="">Üdv!</Navbar.Brand>
                <Nav variant="underline" className="">
                    <Nav.Item>
                        <Nav.Link href="/home">Irányítópult</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/help">Segítség</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Container>
    );
}
