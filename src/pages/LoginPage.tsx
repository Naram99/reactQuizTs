import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormValues from "../components/formValues";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

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
                    <Button variant="danger" type="submit">
                        {register ? "Regisztráció" : "Bejelentkezés"}
                    </Button>
                </Form>
            </div>
            <div className="loginBtnsCt">
                <Form.Group>
                    <Form.Text>{register ? "Már van fiókod?" : "Még nincs fiókod?"}</Form.Text>
                    <Button variant="warning" onClick={toggleRegister}>
                        {register ? "Bejelentkezés" : "Regisztráció"}
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" onClick={() => navigate("/guest")}>
                        Belépés egy játékba vendégként
                    </Button>
                </Form.Group>
            </div>
        </div>
    );
}
