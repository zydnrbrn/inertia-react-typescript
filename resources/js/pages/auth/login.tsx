import GuestLayout from '@/layouts/guest-layout';
import { Head, useForm as useInertiaForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Checkbox from "@/components/checkbox";

export default function Login({ status }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useInertiaForm({
        email: "",
        password: "",
        remember: false
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, type, checked, value } = event.target;
        if (name === "email" || name === "password" || name === "remember") {
            setData(name, type === 'checkbox' ? checked : value);
        }
    }

    function onSubmit(event: React.FormEvent<Element>) {
        event.preventDefault();
        post(route('login'), {
            onStart: () => {
                toast({
                    title: "Logging in ...",
                });
            },
            onError: (errors) => {
                toast({
                    title: "Login failed",
                    variant: "destructive",
                    description: (
                        <ul className="list-disc list-inside">
                            {Object.entries(errors).map(([key, value]) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    ),
                });
            },
            onSuccess: () => {
                toast({
                    title: "Login successful",
                });
            }
        });
    }

    return (
        <GuestLayout>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="">
                <div className="mt-5 space-y-2">
                    <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Login</h3>
                    <p className="">Not have an account? Register <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">here</a></p>
                </div>
            </div>
            <form onSubmit={onSubmit} className="space-y-5">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                    </div>
                    {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                </div>
                <div className="flex items-center">
                    <Checkbox
                        id="remember"
                        name="remember"
                        checked={data.remember}
                        onChange={handleChange}
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                </div>
                {errors.remember && <p className="mt-2 text-sm text-red-600">{errors.remember}</p>}
                <Button type="submit" className="w-full" disabled={processing}>
                    Login
                </Button>
            </form>
        </GuestLayout>
    );
}
