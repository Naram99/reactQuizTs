import { useState } from "react";
import { Button, Container, Form, Card, Row } from "react-bootstrap";
import FormValues from "../models/formValues.interface";
import { useNavigate } from "react-router-dom";
import Validator from "../models/Validator";

const LoginPage: React.FC = () => {
    const validator = new Validator();
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    const [register, setRegister] = useState<boolean>(false);

    const [formValues, setFormValues] = useState<FormValues>({
        userName: "",
        email: "",
        password: "",
        passwordCheck: "",
        gameId: "",
    });

    function toggleRegister(): void {
        setRegister(!register);
    }

    //TODO: call backend with data
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const endpoint: string = register ? "register" : e.currentTarget.id.replace("Form", "");

        try {
            if (endpoint === "register") {
                const validated = validator.registerValidate(formValues);
                if (!validated.valid) throw new Error(validated.cause ? validated.cause : "Register error");
            }

            const response = await fetch(`${API_URL}/${endpoint}`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues),
            });

            if (!response.ok) {
                throw new Error("Server error");
            }
            if (endpoint === "login") navigate("/main/home");
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    return (
        <Container className="loginWrapper">
            <Row>
                <Card className="guestFormCt">
                    <Form id="guestForm" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Játékazonosító</Form.Label>
                            <Form.Control type="text" name="gameId" id="gameIdInput" onChange={handleChange} />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Belépés
                        </Button>
                    </Form>
                </Card>
                <Card className="loginFormCt">
                    <Form id="loginForm" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="userName">Felhasználónév</Form.Label>
                            <Form.Control type="text" name="userName" id="userNameInput" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Jelszó</Form.Label>
                            <Form.Control type="password" name="password" id="passwordInput" onChange={handleChange} />
                        </Form.Group>
                        {register && (
                            <>
                                <Form.Group>
                                    <Form.Label htmlFor="passwordCheck">Jelszó újra</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="passwordCheck"
                                        id="passwordCheckInput"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="email">Email cím</Form.Label>
                                    <Form.Control type="email" name="email" id="emailInput" onChange={handleChange} />
                                </Form.Group>
                            </>
                        )}
                        <Button variant="danger" type="submit">
                            {register ? "Regisztráció" : "Bejelentkezés"}
                        </Button>
                    </Form>
                </Card>
                <Card className="loginBtnsCt">
                    <Form.Text>{register ? "Már van fiókod?" : "Még nincs fiókod?"}</Form.Text>
                    <Button variant="warning" onClick={toggleRegister}>
                        {register ? "Bejelentkezés" : "Regisztráció"}
                    </Button>
                </Card>
            </Row>
        </Container>
    );
};

export default LoginPage;
