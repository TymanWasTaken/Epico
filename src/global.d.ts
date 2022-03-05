/// <reference types="svelte" />

declare namespace EpicoApi {
    export interface SuccessResponse {
        success: true;
    }
    export interface ErrorResponse {
        success: false;
    }
    export interface LoginSuccessResponse extends SuccessResponse {
        token: string;
    }
    export interface LoginErrorResponse extends ErrorResponse {
        message: string;
    }
    export type LoginResponse = LoginSuccessResponse | LoginErrorResponse;
}