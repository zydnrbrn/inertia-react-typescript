import { PageProps } from '@/types';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { LuFilter, LuImport, LuPlus } from 'react-icons/lu';

export default function Dashboard({ auth }: PageProps) {
    return (
        <DashboardLayout
            title='Dashboard'
            user={auth.user}
        >
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                        <CardHeader className="pb-3">
                            <CardTitle>Overview</CardTitle>
                            <CardDescription className="max-w-lg text-balance leading-relaxed">
                                Key metrics and insights for your business.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardDescription>New Customers</CardDescription>
                                        <CardTitle className="text-4xl">125</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">+15% from last month</div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={15} aria-label="15% increase" />
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardDescription>Total Revenue</CardDescription>
                                        <CardTitle className="text-4xl">$45,231</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">+20% from last month</div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={20} aria-label="20% increase" />
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardDescription>Leads</CardDescription>
                                        <CardTitle className="text-4xl">1,234</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">+10% from last month</div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={10} aria-label="10% increase" />
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardDescription>Conversion Rate</CardDescription>
                                        <CardTitle className="text-4xl">15%</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">+5% from last month</div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={5} aria-label="5% increase" />
                                    </CardFooter>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Tabs defaultValue="customers">
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="customers">Customers</TabsTrigger>
                            <TabsTrigger value="leads">Leads</TabsTrigger>
                            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                                        <LuFilter className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only">Filter</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Inactive</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Potential</DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                                <LuImport className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Export</span>
                            </Button>
                            <Button size="sm" className="h-7 gap-1 text-sm">
                                <LuPlus className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Add Customer</span>
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="customers">
                        <Card x-chunk="dashboard-05-chunk-3">
                            <CardHeader className="px-7">
                                <CardTitle>Customers</CardTitle>
                                <CardDescription>Manage your customer base.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead className="hidden sm:table-cell">Email</TableHead>
                                            <TableHead className="hidden sm:table-cell">Phone</TableHead>
                                            <TableHead className="hidden md:table-cell">Last Interaction</TableHead>
                                            <TableHead className="text-right">Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow className="bg-accent">
                                            <TableCell>
                                                <div className="font-medium">Liam Johnson</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">liam@example.com</TableCell>
                                            <TableCell className="hidden sm:table-cell">(123) 456-7890</TableCell>
                                            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
                                            <TableCell className="text-right">
                                                <Badge className="text-xs" variant="secondary">
                                                    Active
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">Olivia Smith</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">olivia@example.com</TableCell>
                                            <TableCell className="hidden sm:table-cell">(987) 654-3210</TableCell>
                                            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
                                            <TableCell className="text-right">
                                                <Badge className="text-xs" variant="outline">
                                                    Inactive
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">Noah Williams</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">noah@example.com</div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">noah@example.com</TableCell>
                                            <TableCell />
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    );
}
