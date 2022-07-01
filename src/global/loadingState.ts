import { atom, useRecoilState, useResetRecoilState } from "recoil";

/**
 * @description 비동기 로딩 상태관리
 */

// atom
const loadingState = atom<boolean>({
    key: "loadingState",
    default: false,
});

// hook
function useLoadingState() {

    const [loading, setLoading] = useRecoilState(loadingState);
    const resetLoading = useResetRecoilState(loadingState);

    return { 
        loading, 
        setLoading,
        resetLoading,
    };
}

export { useLoadingState };
