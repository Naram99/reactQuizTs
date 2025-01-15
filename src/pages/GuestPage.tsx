import { Form, Button } from "react-bootstrap";
import FormValues from "../components/formValues";
import { useState } from "react";

export default function GuestPage() {
    const [formValues, setFormValues] = useState<FormValues>({
        userName: "",
        password: "",
        passwordCheck: "",
        gameId: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Játékazonosító</Form.Label>
                    <Form.Control type="text" name="gameId" id="gameIdInput" onChange={handleChange} />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Belépés
                </Button>
            </Form>
        </>
    );
}
