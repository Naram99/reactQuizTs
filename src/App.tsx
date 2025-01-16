import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <LoginPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

