"use client";
import { z } from "zod";
import Link from "next/link";
import {
    Form,
    FormItem,
    FormField,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/icons";
import { setCredentials } from "@/redux/slice/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignupMutation } from "@/redux/query/auth";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please provide a valid name.",
    }),
    email: z.string().email({
        message: "Please provide a valid email.",
    }),
    number: z.string().max(14, {
        message: "Please provide a valid number.",
    }),
    password: z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            {
                message:
                    "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            }
        ),
    confirmPassword: z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            {
                message:
                    "Confirm password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            }
        ),
});

const SignIn: React.FC = () => {
    const dispatch = useDispatch();
    const [signup, { isLoading }] = useSignupMutation();

    const [passwordShow, setPasswordShow] = useState<boolean>(false);
    const [confirmPasswordShow, setConfirmPasswordShow] =
        useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            number: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const result = await signup({
                name: values.name,
                email: values.email,
                number: values.number,
                password: values.password,
                confirmPassword: values.confirmPassword,
            }).unwrap();
            if (result.success) {
                dispatch(setCredentials(result.data));
                toast.success(result.message);
            }
        } catch (error) {
            toast.error((error as Error).message);
        }
    };

    return (
        <>
            <div className="max-w-lg h-full">
                <div className="text-3xl dark:text-white text-black text-center font-serif tracking-tighter font-bold mb-6">
                    Welcome to Wax/d, create an account to get started.
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-3 select-none"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"password"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={
                                                    passwordShow
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Password"
                                                {...field}
                                            />
                                            {passwordShow ? (
                                                <EyeOff
                                                    className="absolute h-full top-0 right-3 cursor-pointer"
                                                    size={20}
                                                    onClick={() =>
                                                        setPasswordShow(false)
                                                    }
                                                />
                                            ) : (
                                                <Eye
                                                    className="absolute h-full top-0 right-3 cursor-pointer"
                                                    size={20}
                                                    onClick={() =>
                                                        setPasswordShow(true)
                                                    }
                                                />
                                            )}
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={
                                                    confirmPasswordShow
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Confirm password"
                                                {...field}
                                            />
                                            {confirmPasswordShow ? (
                                                <EyeOff
                                                    className="absolute h-full top-0 right-3 cursor-pointer"
                                                    size={20}
                                                    onClick={() =>
                                                        setConfirmPasswordShow(
                                                            false
                                                        )
                                                    }
                                                />
                                            ) : (
                                                <Eye
                                                    className="absolute h-full top-0 right-3 cursor-pointer"
                                                    size={20}
                                                    onClick={() =>
                                                        setConfirmPasswordShow(
                                                            true
                                                        )
                                                    }
                                                />
                                            )}
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingIcon /> : "Submit"}
                        </Button>
                    </form>
                </Form>
                <div className="mb-3 text-center dark:text-white text-black mt-4">
                    Already have an account?
                    <Link href="/signin" className="ml-2 text-blue-500">
                        Sign In
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SignIn;
