import { createBrowserRouter } from "react-router-dom";

import ErrorBoundary from "@/pages/ErrorBoundary";

import Login from "@/pages/Login";
import Guide from "@/pages/sample/Guide";
import Root from "@/pages/Root";
import Home from "./pages/Home";

/**
 * @description 라우터 경로 설정
 * @see [https://reactrouter.com/en/main/routers/create-browser-router]
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "guide",
                element: <Guide />,
            },
        ],
    },
]);

export default router;
