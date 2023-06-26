import { createBrowserRouter } from "react-router-dom";

import ErrorBoundary from "@/pages/ErrorBoundary";
import Page01 from "@/pages/Page01";
import Page02 from "@/pages/Page02";
import Page03 from "@/pages/Page03";
import Page04 from "@/pages/Page04";
import Page05 from "@/pages/Page05";
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
                path: "form",
                element: <Guide />,
            },
            {
                path: "page01", // page01
                element: <Page01 />,
            },
            {
                path: "page02", // page02
                element: <Page02 />,
            },
            {
                path: "page03", // page03
                element: <Page03 />,
            },
            {
                path: "page04", // page04
                element: <Page04 />,
            },
            {
                path: "page05", // page05
                element: <Page05 />,
            },
        ],
    },
]);

export default router;
