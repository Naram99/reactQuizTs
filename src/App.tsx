import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import GuestPage from "./pages/GuestPage";

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
        path: "/guest",
        element: <GuestPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

