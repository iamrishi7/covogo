import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Euro, Users } from 'lucide-react';
import QRCode from 'react-qr-code';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];


export default function Dashboard({user}: any) {
    const { auth, signups, total_signups } = usePage<SharedData>().props;
    const myReferralCode = auth.user?.referral_code ?? "";

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Rider Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 items-center justify-center">
                Bonjour {auth.user.name}
            </div>
        </AppLayout>
    );
}
