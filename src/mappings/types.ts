/**
 * @description 공통으로 사용하는 타입에 대한 정의
 * @see [!!!] 프로젝트 상황에 맞게 수정 필요
 */

import { ChangeEvent } from "react";
/**
 * @description 입력값 타입 제한
 */
export type InputValue = string | number | undefined;

/**
 * @description { key : value } 형태의 객체
 */
// export type KeyValuePair = { [key: string]: unknown };
export type KeyValuePair<T = unknown> = Record<string, T>;

/**
 * @description 모달 props
 */
export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

/**
 * @description Input Change Event
 */
export type InputChange = ChangeEvent<HTMLInputElement>;

/**
 * @description Select Change Event
 */
export type SelectChange = ChangeEvent<HTMLSelectElement>;

/**
 * @description Select Option Type
 */
export type Option = {
    value: any;
    text: string;
};
