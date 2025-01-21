import { Badge, Button, Card } from "react-bootstrap";
import { cardData } from "../models/cardData.type";

const MainCard: React.FC<cardData> = ({ title, description, notification, buttonText, buttonLink }) => {
    return (
        <Card className="shadow-sm">
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{description}</Card.Text>
                {notification && (
                    <Badge bg="info" className="mb-2">
                        {notification}
                    </Badge>
                )}
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" href={buttonLink}>
                    {buttonText}
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default MainCard;
