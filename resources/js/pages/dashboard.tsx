import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Euro, Users } from 'lucide-react';
import QRCode from 'react-qr-code';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const referrals = [
    {
        id: 'INV001',
        paymentStatus: 'Paid',
        name: 'John Doe',
        created_at: '2023-07-01',
    },
    {
        id: 'INV002',
        paymentStatus: 'Pending',
        name: 'Karan',
        created_at: '2023-07-01',
    },
    {
        id: 'INV003',
        paymentStatus: 'Unpaid',
        name: 'Adam',
        created_at: '2023-07-01',
    },
    {
        id: 'INV004',
        paymentStatus: 'Paid',
        name: 'Bob',
        created_at: '2023-07-01',
    },
    {
        id: 'INV005',
        paymentStatus: 'Paid',
        name: 'Amanda',
        created_at: '2023-07-01',
    },
    {
        id: 'INV006',
        paymentStatus: 'Pending',
        name: 'Nicolas',
        created_at: '2023-07-01',
    },
    {
        id: 'INV007',
        paymentStatus: 'Unpaid',
        name: 'Ruth',
        created_at: '2023-07-01',
    },
];

export default function Dashboard() {
    const myReferralCode = '6789';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Signups</CardTitle>
                                <CardDescription>New signups with your code</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-8">
                                <div className="flex flex-row items-end justify-between">
                                    <h2 className="text-5xl font-bold">45</h2>
                                    <Users className="text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Commission</CardTitle>
                                <CardDescription>Commission earned through rides</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-8">
                                <div className="flex flex-row items-end justify-between">
                                    <h2 className="text-5xl font-bold">450.28</h2>
                                    <Euro className="text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Withdrawals</CardTitle>
                                <CardDescription>Payouts settled in your account</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-8">
                                <div className="flex flex-row items-end justify-between">
                                    <h2 className="text-5xl font-bold">273.18</h2>
                                    <Euro className="text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="relative grid min-h-[100vh] flex-1 auto-rows-min gap-4 overflow-hidden rounded-xl md:min-h-min md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex flex-col items-center justify-center overflow-hidden rounded-xl border p-4">
                        <p className="text-muted-foreground text-center">Your Referral Link</p>
                        <div className="mx-auto">
                            <QRCode value={`/auth/register?ref=${myReferralCode}`} className="w-48" />
                        </div>
                        <h3 className="text-center">
                            <b>Code: {myReferralCode}</b>
                        </h3>
                    </div>

                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative col-span-2 overflow-hidden rounded-xl border">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Referrals</CardTitle>
                                <CardDescription>Most recent referrals</CardDescription>
                            </CardHeader>
                            <CardContent className="">
                                <Table>
                                    <TableCaption>A list of your recent referrals.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>User</TableHead>
                                            <TableHead>Registered At</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {referrals.slice(0, 5).map((data) => (
                                            <TableRow key={data.id}>
                                                <TableCell className="font-medium">{data.name}</TableCell>
                                                <TableCell>{data.created_at}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
