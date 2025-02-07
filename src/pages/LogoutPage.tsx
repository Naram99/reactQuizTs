import { useEffect } from "react";
import { Button } from "react-bootstrap";

export const LogoutPage: React.FC = () => {
    useEffect(() => {
        const logout = async () => {
            const resp = await fetch("http://localhost:3000/logout", {
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
