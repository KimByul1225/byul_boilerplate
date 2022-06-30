import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import Cookies from "js-cookie";

import { useLoginState } from "@/global/loginState";
import client from "@/plugin/client";
import { Routes } from "@/mappings/enums";

/**
 * @description 라우터 정보가 변경될 때마다 쿠키를 통하여 로그인 유효여부 확인
 * @see [https://www.npmjs.com/package/js-cookie]
 */
function useCheckLoginState() {
    // recoil
    const { setLogin, resetLogin } = useLoginState();

    // router-info
    const navigate = useNavigate();
    const location = useLocation();

    // watch
    useLayoutEffect(() => {
        // 토큰 정보를 가져온다
        // [!] 참조할 토큰 개수는 프로젝트 마다 다를 수 있다
        // [!] 토큰명은 각 프로젝트 마다 다를 수 있다
        const { Authorization } = client.defaults.headers.common || {};
        const token = Cookies.get("access_token");

        // 토큰이 없거나, http 헤더의 토큰값과 일치하지 않는 경우
        if (!Authorization || !token || token !== Authorization) {
            // 로그인 상태가 유효하지 않다는 안내 메세지 및 후처리 로직 구현
            // [!!!] 샘플 로직, 프로젝트마다 수정 필요
            resetLogin();

            if (location.pathname !== Routes.Login) {
                navigate(Routes.Login);
            }
        }

        // 로그인 상태가 유효할 경우 : 로그인 전역상태값을 계속 유지한다
        if (token && Authorization && token === Authorization) {
            setLogin({ isLogin: true });

            // 로그인 상태에서 다시 로그인 페이지로 진입할 경우 : 진입불가, 메인 페이지로 이동
            if (location.pathname === Routes.Login) {
                navigate(Routes.Root);
            }
        }
    }, [location]);
}

export default useCheckLoginState;
