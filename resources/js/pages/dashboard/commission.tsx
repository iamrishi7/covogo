import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Commission',
        href: '/dashboard/commission',
    },
];

export default function Commission() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Commission" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                
            </div>
        </AppLayout>
    );
}
