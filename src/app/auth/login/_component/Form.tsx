"use client";
import { LoginSchema, LoginSchemaType } from '@/validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
    Form as FormRoot,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from '@/action';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { Eye, EyeOff, Loader } from 'lucide-react';
import { Dashboard } from '@/constant/constants';

export default function Form() {
    const form = useForm({ resolver: zodResolver(LoginSchema), defaultValues: { email: '', password: '' } });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
        setLoading(true);
        const res = await signIn(data);
        if (res?.status) {
            router.push(Dashboard.DASHBOARD);
            toast.success(res.data?.message);
        } else {
            toast.error(res.error || 'Request Failed');
        }
        setLoading(false);
    };

    return (
        <FormRoot {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
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
                                <div style={{ position: 'relative' }}>
                                    <Input type={showPassword ? 'text' : 'password'} placeholder="Password" {...field} />
                                    <div
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{
                                            position: 'absolute',
                                            right: '0.75rem',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer',
                                            color: '#888'
                                        }}
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={loading} className='w-full'>{loading ? <Loader className='animate-spin' /> : "Submit"}</Button>
            </form>
        </FormRoot>
    )
}
