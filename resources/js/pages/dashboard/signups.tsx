import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { CalendarIcon } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Inscriptions',
        href: '/dashboard/signups',
    },
];


export default function Signups() {
    const { auth, users } = usePage<SharedData>().props;
    const [date, setDate] = React.useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: new Date(),
        to: new Date(),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Inscriptions" />

            <div className="flex h-full w-full flex-1 flex-col items-end gap-4 rounded-xl p-4">
                <p className="text-sm">Filtrer par date</p>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={'outline'} className={'w-[240px] pl-3 text-left font-normal'}>
                            <span>Choisir des dates</span>
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="range" selected={date} onSelect={(v) => setDate({ from: v?.from, to: v?.to })} />
                    </PopoverContent>
                </Popover>
                <br />

                <Table>
                    <TableCaption>Une liste de vos références récentes.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Utilisatrices</TableHead>
                            <TableHead className="w-[140px]">Totale Commission</TableHead>
                            <TableHead className="text-right">Inscrit le</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* @ts-ignore */}
                        {users?.length ? users.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell className="font-medium">{data.name}</TableCell>
                                <TableCell className="w-[140px]">€ {Number(Math.random() * 63 * Math.random() * 100).toFixed(2)}</TableCell>
                                <TableCell className="text-right">{data.created_at ? new Date(data.created_at).toLocaleString() : ''}</TableCell>
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
