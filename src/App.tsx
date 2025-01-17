import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import HelpPage from "./pages/HelpPage";

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
        element: <UserPage />,
    },
    {
        path: "/help",
        element: <HelpPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

