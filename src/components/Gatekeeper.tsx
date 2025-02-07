import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export const Gatekeeper: React.FC = () => {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const resp = await fetch("http://localhost:3000/api/checkAuth", {
                    method: "GET",
                    credentials: "include",
                });

                if (resp.ok) {
                    setAuthenticated(true);
                }
                if (!resp.ok) {
                    setAuthenticated(false);
                }
            } catch (error) {
                setAuthenticated(false);
                console.log(error);
            }
        };

        checkAuth();
    }, []);

    if (authenticated === null) {
        return <p>Loading...</p>;
    }

    return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
