import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export type LoginPayloadType = {
    email: string;
    password: string;
};

export type SignUpPayloadType = LoginPayloadType & {
    name: string;
    number: string;
    confirmPassword: string;
};

export type UserType = {
    id: string;
    isDelete: boolean;
    role: string;
    name: string;
    email: string;
    number: string;
    updatedAt: string;
    createdAt: string;
    profileImage: string | null;
    passwordResetToken: string | null;
    passwordResetExpires: string | null;
};
