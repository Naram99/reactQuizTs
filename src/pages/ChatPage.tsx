import React from "react";
import { Button, Container } from "react-bootstrap";

const ChatPage: React.FC = () => {
    return (
        <Container>
            <Button>Join room</Button>
            <Button>Create room</Button>
        </Container>
    );
};

export default ChatPage;
