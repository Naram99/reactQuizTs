import { Col, Container, Row } from "react-bootstrap";
import MainCard from "./MainCard";
import { cardTexts } from "../resources/languages/hu/cardTexts";

export default function MainContent(): JSX.Element {
    return (
        <main>
            <Container>
                <Row className="justify-content-between">
                    {Object.entries(cardTexts).map(([key, card]) => (
                        <Col key={key} md="4" sm="12" className="h-100">
                            <MainCard {...card}></MainCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    );
}
