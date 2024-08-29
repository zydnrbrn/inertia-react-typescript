import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Head, Link } from "@inertiajs/react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ReactNode } from "react"
import { User } from "@/types"
import { LuCog, LuFileText, LuLayoutDashboard, LuMenu, LuSearch, LuSettings, LuUserSquare } from "react-icons/lu"

interface DashboardProps {
    title: string;
    children: ReactNode;
    user: User;
}

export function DashboardLayout({ title, children, user }: DashboardProps) {
    return (
        <>
            <Head title={title} />
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                        <TooltipProvider>
                            <Link
                                href="#"
                                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                            >
                                <LuCog className="h-4 w-4 transition-all group-hover:scale-110" />
                                <span className="sr-only">CRM</span>
                            </Link>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"

                                    >
                                        <LuLayoutDashboard className="h-5 w-5" />
                                        <span className="sr-only">Dashboard</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Dashboard</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"

                                    >
                                        <LuUserSquare className="h-5 w-5" />
                                        <span className="sr-only">Customers</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Customers</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"

                                    >
                                        <LuFileText className="h-5 w-5" />
                                        <span className="sr-only">Reports</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Reports</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"

                                    >
                                        <LuSettings className="h-5 w-5" />
                                        <span className="sr-only">Settings</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">Settings</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </nav>
                </aside>
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size="icon" variant="outline" className="sm:hidden">
                                    <LuMenu className="h-5 w-5" />
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="sm:max-w-xs">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        href="#"
                                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"

                                    >
                                        <LuCog className="h-5 w-5 transition-all group-hover:scale-110" />
                                        <span className="sr-only">CRM</span>
                                    </Link>
                                    <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" >
                                        <LuLayoutDashboard className="h-5 w-5" />
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"

                                    >
                                        <LuUserSquare className="h-5 w-5" />
                                        Customers
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"

                                    >
                                        <LuFileText className="h-5 w-5" />
                                        Reports
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"

                                    >
                                        <LuSettings className="h-5 w-5" />
                                        Settings
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Breadcrumb className="hidden md:flex">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="#" >
                                            Dashboard
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="relative ml-auto flex-1 md:grow-0">
                            <LuSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search customers..."
                                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                                    <img
                                        src="/placeholder-user.jpg"
                                        width={36}
                                        height={36}
                                        alt="Avatar"
                                        className="overflow-hidden rounded-full"
                                        style={{ aspectRatio: "36/36", objectFit: "cover" }}
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><Link method="post" href={route('logout')}>Logout</Link></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
