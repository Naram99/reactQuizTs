import { Col, Container, Row } from "react-bootstrap";
import MainCard from "./MainCard";
import { cardTexts } from "../resources/languages/hu/cardTexts";

export default function MainContent(): JSX.Element {
    return (
        <main>
            <Container>
                <Row className="justify-content-between">
                    <Col md="4" sm="12">
                        <MainCard {...cardTexts.chat}></MainCard>
                    </Col>
                    <Col md="4" sm="12">
                        <MainCard {...cardTexts.forum}></MainCard>
                    </Col>
                    <Col md="4" sm="12">
                        <MainCard {...cardTexts.games}></MainCard>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
