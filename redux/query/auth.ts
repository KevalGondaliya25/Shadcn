import axiosBaseQuery from "@/utils/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginPayloadType, SignUpPayloadType, UserType } from "@/types";

interface AuthResponse {
    success: boolean;
    message: string;
    data: {
        user: UserType;
        token: string;
    }
}

export const authApi = createApi({
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginPayloadType>({
            query: (credentials) => ({
                url: "/user/login",
                method: "POST",
                body: credentials,
            }),
        }),
        signup: builder.mutation<AuthResponse, SignUpPayloadType>({
            query: (userData) => ({
                url: "/user/signUp",
                method: "POST",
                body: userData,
            }),
        }),
    }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
