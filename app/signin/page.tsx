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
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/icons";
import { setCredentials } from "@/redux/slice/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/query/auth";

const formSchema = z.object({
    email: z.string().email({
        message: "Please provide a valid email.",
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
});

const SignIn: React.FC = () => {
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const [passwordShow, setPasswordShow] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const result = await login({
                email: values.email,
                password: values.password,
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
                    Welcome back, login to get started.
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-3 select-none"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
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
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingIcon /> : "Submit"}
                        </Button>
                    </form>
                </Form>
                <div className="flex gap-4 sm:flex-nowrap flex-wrap mt-4 select-none">
                    <Button className="w-full" type="submit">
                        Sign in with Apple
                    </Button>
                    <Button className="w-full" type="submit">
                        Sign in with Google
                    </Button>
                </div>
                <div className="mb-3 text-center dark:text-white text-black mt-4">
                    Don't have an account?
                    <Link href="/signup" className="ml-2 text-blue-500">
                        Sign Up
                    </Link>
                </div>
                <div className="w-full flex justify-center text-blue-500">
                    <Link href="#">Forgot Password?</Link>
                </div>
            </div>
        </>
    );
};

export default SignIn;
