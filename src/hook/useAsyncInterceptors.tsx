import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useLayoutEffect } from "react";

import { useLoadingState } from "@/global/loadingState";
import client from "@/plugin/client";

/**
 * @description 비동기 인터셉터 훅
 * @see [https://axios-http.com/kr/docs/interceptors]
 */
function useAsyncInterceptors() {
    // recoil
    const { setLoading, resetLoading } = useLoadingState();

    // watch
    useLayoutEffect(() => {
        const requestInterceptor = client.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                setLoading(true);

                console.log(config);
                return config;
            },
            (error: AxiosError) => {
                resetLoading();

                console.error(error);
                Promise.reject(error);
            }
        );

        const responseInterceptor = client.interceptors.response.use(
            (response: AxiosResponse) => {
                // 응답에 대한 유효성 검사 로직 구현

                resetLoading();

                console.log(response);
                return response.data;
            },
            (error: AxiosError) => {
                resetLoading();

                console.error(error);
                Promise.reject(error);
            }
        );

        // clean-up
        return () => {
            client.interceptors.request.eject(requestInterceptor);
            client.interceptors.response.eject(responseInterceptor);
        };
    }, [resetLoading, setLoading]);
}

export default useAsyncInterceptors;
