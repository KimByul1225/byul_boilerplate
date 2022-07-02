import { atom, selector, useRecoilState, useResetRecoilState } from "recoil";

type Props = {
    isLogin: boolean;
};

// atom
const loginState = atom<Props>({
    key: "loginState",
    default: {
        isLogin: false,
    },
});

// selector
const loginSelector = selector<Partial<Props>>({
    key: "loginSelector",
    get: ({ get }) => get(loginState),
    set: ({ set }, newValue) => {
        set(loginState, (prevValue) => ({ ...prevValue, ...newValue }));
    },
});

// hook
function useLoginState() {
    const [login, setLogin] = useRecoilState(loginSelector);
    const resetLogin = useResetRecoilState(loginState);

    return {
        login,
        setLogin,
        resetLogin,
    };
}

export { useLoginState };
