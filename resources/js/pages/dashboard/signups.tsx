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
        title: 'Signups',
        href: '/dashboard/signups',
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

export default function Signups() {
    const [date, setDate] = React.useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: new Date(),
        to: new Date(),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Signups" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <p>Filter by Date</p>
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
                <br />

                <Table>
                    <TableCaption>A list of your recent referrals.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead className="w-[120px]">Registered At</TableHead>
                            <TableHead className="text-right">Commission (€)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {referrals.slice(0, 5).map((data) => (
                            <TableRow key={data.id}>
                                <TableCell className="font-medium">{data.name}</TableCell>
                                <TableCell className="w-[120px]">{data.created_at}</TableCell>
                                <TableCell className="text-right">134</TableCell>
                            </TableRow>
                        ))}
                        {referrals.slice(0, 5).map((data) => (
                            <TableRow key={data.id}>
                                <TableCell className="font-medium">{data.name}</TableCell>
                                <TableCell className="w-[120px]">{data.created_at}</TableCell>
                                <TableCell className="text-right">116</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
