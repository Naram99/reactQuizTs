import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormValues from "../components/formValues";

export default function LoginPage() {
    const [register, setRegister] = useState(false);

    const [formValues, setFormValues] = useState<FormValues>({
        userName: "",
        password: "",
        passwordCheck: "",
    });

    function toggleRegister(): void {
        setRegister(!register);
    }

    //TODO: call backend with data
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formValues);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        console.log(formValues);
    }

    return (
        <div className="loginWrapper">
            <div className="loginFormCt">
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
                        </>
                    )}
                </Form>
                <Button variant="danger" type="submit">
                    {register ? "Regisztráció" : "Bejelentkezés"}
                </Button>
                <Button variant="warning" onClick={toggleRegister}>
                    {register ? "Bejelentkezés" : "Regisztráció"}
                </Button>
            </div>
        </div>
    );
}
