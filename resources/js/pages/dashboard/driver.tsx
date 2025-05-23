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
            <Head title="Tableau de bord" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Inscriptions</CardTitle>
                                <CardDescription>Nouvelles inscriptions avec votre code</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-8">
                                <div className="flex flex-row items-end justify-between">
                                    {/* @ts-ignore */}
                                    <h2 className="text-5xl font-bold">{total_signups}</h2>
                                    <Users className="text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Commission</CardTitle>
                                <CardDescription>Commission gagnée grâce aux trajets</CardDescription>
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
                                <CardTitle>Retraits</CardTitle>
                                <CardDescription>Paiements réglés sur votre compte</CardDescription>
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
                        <p className="text-muted-foreground text-center">Votre lien de parrainage</p>
                        <div className="mx-auto">
                            <QRCode value={`https://covogo.krispire.xyz/register?ref=${myReferralCode}`} className="w-48" />
                        </div>
                        <h3 className="text-center">
                            {/* @ts-ignore */}
                            <b>Code: {myReferralCode}</b>
                        </h3>
                    </div>

                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative col-span-2 overflow-hidden rounded-xl border">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Parrainages</CardTitle>
                                <CardDescription>Parrainages les plus récents</CardDescription>
                            </CardHeader>
                            <CardContent className="">
                                <Table>
                                    <TableCaption>Une liste de vos références récentes.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Utilisateur</TableHead>
                                            <TableHead>Inscrit le</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {/* @ts-ignore */}
                                        {typeof signups == 'object' && signups?.length ? signups?.slice(0, 5).map((data) => (
                                            <TableRow key={data.id}>
                                                <TableCell className="font-medium">{data.name}</TableCell>
                                                <TableCell>{data.created_at ? new Date(data.created_at).toLocaleString() : ''}</TableCell>
                                            </TableRow>
                                        )) : null}
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
