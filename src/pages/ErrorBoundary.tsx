import React from "react";

import {
    isRouteErrorResponse,
    useRouteError,
    useNavigate,
    Navigate,
} from "react-router-dom";

import Cookies from "js-cookie";

/**
 * @description 잘못된 라우터 입력시 안내 페이지
 * @see [https://reactrouter.com/en/main/route/error-element]
 */
function ErrorBoundary() {
    // router-info
    const navigate = useNavigate();
    const error = useRouteError();

    // 접속 권한이 없는 경우 로그인 페이지로 이동
    if (!Cookies.get("access_token")) {
        return <Navigate to="login" />;
    }

    // 에러 유형에 따른 정보 표기 | 향후 분기처리 형태로 페이지 수정 필요
    if (isRouteErrorResponse(error)) {
        // view
        return (
            <div>
                <h1 className="Auth-form-container">
                    {`(${error.status}) ${error.statusText}`} &nbsp;
                    <br />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate("/")}
                    >
                        Go Back
                    </button>
                </h1>
            </div>
        );
    }
}
export default ErrorBoundary;
