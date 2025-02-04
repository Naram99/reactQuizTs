import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    const checkAuth = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/checkAuth", {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                setAuthenticated(true);
            }
            if (!response.ok) {
                setAuthenticated(false);
            }
        } catch (error) {
            setAuthenticated(false);
            console.log(error);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return <AuthContext.Provider value={{ authenticated, checkAuth }}>{children}</AuthContext.Provider>;
};
