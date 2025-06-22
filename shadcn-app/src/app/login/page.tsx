"use client";

import { useForm } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

export default function Login() {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: "onSubmit",
    });

    const onSubmit = (data: { email: string; password: string }) => {
        // Handle login logic here
        console.log('Email:', data.email);
        console.log('Password:', data.password);
    };

    return (
        <div className="flex p-4 rounded-sm flex-col items-center bg-background gap-4 border-accent border-2 shadow-lg">
            <div>
                <h2>Login</h2>
                <Form {...form}>
                    <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            rules={{ required: "Password is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter your password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
