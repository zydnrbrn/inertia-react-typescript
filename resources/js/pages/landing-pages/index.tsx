import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check } from "lucide-react"
import { Link } from "@inertiajs/react"
import { SVGProps } from "react"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="flex items-center px-4 lg:px-6 h-14">
                <Link className="flex items-center justify-center" href="#">
                    <MountainIcon className="w-6 h-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="flex gap-4 ml-auto sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
                        Testimonials
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
                        FAQ
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Revolutionize Your Workflow
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Boost productivity and streamline your processes with our cutting-edge SaaS solution.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button>Get Started</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">Key Features</h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Automated Workflows</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Streamline your processes with intelligent automation, saving time and reducing errors.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Real-time Collaboration</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Work together seamlessly with your team, no matter where they are in the world.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Advanced Analytics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Gain valuable insights with our powerful analytics tools and data visualization.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">Flexible Pricing</h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Basic</CardTitle>
                                    <CardDescription>For individuals and small teams</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold">$19/mo</p>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            5 team members
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            Basic features
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            5GB storage
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Get Started</Button>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pro</CardTitle>
                                    <CardDescription>For growing businesses</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold">$49/mo</p>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            Unlimited team members
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            Advanced features
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            50GB storage
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Get Started</Button>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Enterprise</CardTitle>
                                    <CardDescription>For large organizations</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold">Custom</p>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            Unlimited everything
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            White-label option
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="w-4 h-4 mr-2" />
                                            24/7 premium support
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Contact Sales</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">What Our Customers Say</h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle>John Doe</CardTitle>
                                            <CardDescription>CEO, TechCorp</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    "This SaaS has completely transformed how we operate. The automation features alone have saved us countless hours."
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder-avatar-2.jpg" alt="Avatar" />
                                            <AvatarFallback>JS</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle>Jane Smith</CardTitle>
                                            <CardDescription>CTO, InnovateCo</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    "The real-time collaboration tools are a game-changer. Our team's productivity has skyrocketed since we started using this platform."
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder-avatar-3.jpg" alt="Avatar" />
                                            <AvatarFallback>RJ</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle>Robert Johnson</CardTitle>
                                            <CardDescription>CFO, FinanceHub</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    "The analytics provided by this SaaS have given us invaluable insights into our operations. It's been crucial for our strategic planning."
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Join thousands of satisfied customers and transform your business today.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input className="flex-1 max-w-lg" placeholder="Enter your email" type="email" />
                                    <Button type="submit">Get Started</Button>
                                </form>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    By signing up, you agree to our{" "}
                                    <Link className="underline underline-offset-2" href="#">
                                        Terms & Conditions
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col items-center w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
                <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
