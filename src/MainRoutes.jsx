import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/landingpage";
import SignIn from "./components/register/SignIn";
import SignUp from "./components/register/SignUp";
import HomePage from "./components/main";
import UnexpectedError from "./components/errors/unexpectedError";
import { loader as rootLoader } from "./rootLoader";
  
const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <UnexpectedError />,
        loader: rootLoader,
        children: []
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
]);

export default routes;