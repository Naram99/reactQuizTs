import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import HelpPage from "./pages/HelpPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/home",
        element: (
            <ProtectedRoute>
                <UserPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/help",
        element: (
            <ProtectedRoute>
                <HelpPage />
            </ProtectedRoute>
        ),
    },
]);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;

