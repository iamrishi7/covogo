import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { CalendarIcon } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Withdrawals',
        href: '/dashboard/withdrawals',
    },
];

const withdrawals = [
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

export default function Withdrawals() {
    const [date, setDate] = React.useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: new Date(),
        to: new Date(),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Withdrawals" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex h-full w-full flex-1 flex-col items-end gap-4 rounded-xl p-4">
                    <div className="flex w-full flex-row items-end justify-between">
                        <Button>+ New Request</Button>
                        <div className="">
                            <p className="text-sm mb-2">Filter by Date</p>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant={'outline'} className={'w-[240px] pl-3 text-left font-normal'}>
                                        <span>Pick dates</span>
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar mode="range" selected={date} onSelect={(v) => setDate({ from: v?.from, to: v?.to })} />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <br />

                    <Table>
                        <TableCaption>Payouts settled to your account</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Settlement ID</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead className="">Created At</TableHead>
                                <TableHead className="">Status</TableHead>
                                <TableHead className="">Created At</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {withdrawals.slice(0, 5).map((data) => (
                                <TableRow key={data.id}>
                                    <TableCell className="">{data.id}</TableCell>
                                    <TableCell className="">134</TableCell>
                                    <TableCell className="">{data.created_at}</TableCell>
                                    <TableCell className="">
                                        <Badge>Pending</Badge>
                                    </TableCell>
                                    <TableCell className="">{data.created_at}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
