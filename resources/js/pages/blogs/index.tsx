import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "@inertiajs/react"
import { SVGProps } from "react"

export default function BlogList() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex items-center px-4 lg:px-6 h-14">
                <Link className="flex items-center justify-center" href="/">
                    <BookOpenIcon className="w-6 h-6" />
                    <span className="sr-only">Acme Blog</span>
                </Link>
                <nav className="flex gap-4 ml-auto sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                        Home
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 xl:py-48 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Welcome to Our Blog
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Discover insightful articles, expert opinions, and the latest trends in technology and innovation.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input className="flex-1 max-w-lg" placeholder="Search articles..." type="search" />
                                    <Button type="submit" size="icon">
                                        <Search className="w-4 h-4" />
                                        <span className="sr-only">Search</span>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Articles</h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <img src="/placeholder.svg?height=200&width=400" alt="Article thumbnail" className="w-full h-[200px] object-cover rounded-t-lg" />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="text-2xl font-bold">The Future of AI in Web Development</CardTitle>
                                        <p className="text-gray-500 dark:text-gray-400">Exploring how artificial intelligence is shaping the future of web development and design.</p>
                                        <div className="flex items-center mt-4 space-x-2">
                                            <Avatar>
                                                <AvatarImage src="/placeholder-avatar.jpg" alt="Author" />
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium">John Doe</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">May 15, 2023</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex space-x-2">
                                            <Badge>AI</Badge>
                                            <Badge>Web Dev</Badge>
                                        </div>
                                        <Button asChild>
                                            <Link href="/blog/future-of-ai">Read More</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <img src="/placeholder.svg?height=200&width=400" alt="Article thumbnail" className="w-full h-[200px] object-cover rounded-t-lg" />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="text-2xl font-bold">10 Must-Know JavaScript Tips</CardTitle>
                                        <p className="text-gray-500 dark:text-gray-400">Enhance your JavaScript skills with these essential tips and tricks for modern web development.</p>
                                        <div className="flex items-center mt-4 space-x-2">
                                            <Avatar>
                                                <AvatarImage src="/placeholder-avatar-2.jpg" alt="Author" />
                                                <AvatarFallback>JS</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium">Jane Smith</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">May 10, 2023</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex space-x-2">
                                            <Badge>JavaScript</Badge>
                                            <Badge>Tips</Badge>
                                        </div>
                                        <Button asChild>
                                            <Link href="/blog/javascript-tips">Read More</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <img src="/placeholder.svg?height=200&width=400" alt="Article thumbnail" className="w-full h-[200px] object-cover rounded-t-lg" />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="text-2xl font-bold">The Rise of Serverless Architecture</CardTitle>
                                        <p className="text-gray-500 dark:text-gray-400">Discover how serverless architecture is revolutionizing the way we build and deploy web applications.</p>
                                        <div className="flex items-center mt-4 space-x-2">
                                            <Avatar>
                                                <AvatarImage src="/placeholder-avatar-3.jpg" alt="Author" />
                                                <AvatarFallback>AS</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium">Alice Stevens</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">May 5, 2023</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex items-center justify-between">
                                        <div className="flex space-x-2">
                                            <Badge>Serverless</Badge>
                                            <Badge>Architecture</Badge>
                                        </div>
                                        <Button asChild>
                                            <Link href="/blog/serverless-architecture">Read More</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="flex justify-center mt-8">
                                <Button variant="outline" size="icon" className="mr-2">
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="sr-only">Previous page</span>
                                </Button>
                                <Button variant="outline" size="icon">
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="sr-only">Next page</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col items-center w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Acme Inc. All rights reserved.</p>
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

function BookOpenIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
}
