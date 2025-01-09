import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormValues from "../components/formValues";

export default function LoginPage() {
    const [register, setRegister] = useState(false);

    const [formValues, setFormValues] = useState<FormValues>({
        userName: "",
        password: "",
    });

    function toggleRegister(): void {
        setRegister(!register);
    }

    //TODO: call backend with data
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        formValues;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    return (
        <div className="loginWrapper">
            <div className="loginFormCt">
                <Form id="loginForm" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="userName">Felhasználónév</Form.Label>
                        <Form.Control type="text" name="userName" id="userNameInput" onChange={handleChange} />
                    </Form.Group>
                    <label htmlFor="userName">Jelszó</label>
                    <input type="password" name="userPw" id="userPwInput" />
                    {register && (
                        <>
                            <label htmlFor="userName">Jelszó újra</label>
                            <input type="password" name="userPwCheck" id="userPwCheckInput" />
                        </>
                    )}
                </Form>
                <Button variant="warning" onClick={toggleRegister}>
                    {register ? "Bejelentkezés" : "Regisztráció"}
                </Button>
            </div>
        </div>
    );
}
