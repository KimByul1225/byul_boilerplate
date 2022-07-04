/**
 * @description enum collection
 * @tutorial [!!!] [파스칼 케이스]로 작성, 값 비교시 사용, 구조분해 할당을 하지 않는다
 * @see [!!!] 모든 enum은 프로젝트 정의에 맞춰서 수정 필요
 */

// API 응답 성공 여부
export enum Success {
    True = "true",
    False = "false",
}

// API 공통 응답 코드
export enum Code {
    Success = "000",
    Error = "999",
    InvalidToken = "700",
}

// Yes | No 구분
export enum YN {
    Y = 1,
    N = 0,
}

// 등록 / 수정 분기처리 키
export enum ActionType {
    Save = "save",
    Edit = "edit",
    Delete = "delete",
}

// Input > Checkbox Value
export enum Checked {
    True = 1,
    False = 0,
}

// router path collection
export enum Routes {
    Root = "/",
    Login = "/login",
}
