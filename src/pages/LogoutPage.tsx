import { useEffect } from "react";
import { Button } from "react-bootstrap";

export const LogoutPage: React.FC = () => {
    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL;
        const logout = async () => {
            const resp = await fetch(`${API_URL}/logout`, {
                method: "GET",
                credentials: "include",
            });

            if (resp.ok) {
                console.log("Successful Logout");
            }
        };

        logout();
    }, []);

    return (
        <>
            <p>Logout Successful</p>
            <Button variant="primary" href="/login">
                Login
            </Button>
        </>
    );
};
