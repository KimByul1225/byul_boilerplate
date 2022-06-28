import { createBrowserRouter } from "react-router-dom";

import Root from "@/pages/Root";
import Home from "@/pages/Home";
import ErrorBoundary from "@/pages/ErrorBoundary";

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
            }
        ],
    },
]);

export default router;
