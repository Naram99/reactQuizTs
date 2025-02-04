import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { authenticated } = useAuth();

    if (!authenticated) {
        return <Navigate to={"/login"} />;
    }

    return <>{children}</>;
};
