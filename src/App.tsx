import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import HelpPage from "./pages/HelpPage";
import { Gatekeeper } from "./components/Gatekeeper";
import { LogoutPage } from "./pages/LogoutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/logout",
        element: <LogoutPage />,
    },
    {
        path: "/main",
        element: <Gatekeeper />,
        children: [
            {
                path: "help",
                element: <HelpPage />,
            },
            {
                path: "home",
                element: <UserPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

