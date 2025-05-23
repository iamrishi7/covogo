import { Head, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    role: string;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    referral_code?: string;
};

export default function Register() {
    const { url } = usePage();
  const queryParams = new URLSearchParams(url.split('?')[1]);

  const ref = queryParams.get('ref')

    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        role: 'driver',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        referral_code: ref ?? ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Créer un compte" description="Entrez vos informations ci-dessous pour créer votre compte">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Tabs defaultValue="driver" className='w-full' onValueChange={v => setData('role', v)}>
                            <TabsList className='w-full'>
                                <TabsTrigger value="driver" className='w-full'>Conducteur</TabsTrigger>
                                <TabsTrigger value="rider" className='w-full'>Passager</TabsTrigger>
                            </TabsList>
                        </Tabs>
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Adresse e-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirmez le mot de passe</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    {data.role == 'rider' && <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Code de référence</Label>
                        <Input
                            id="referral_code"
                            tabIndex={4}
                            value={data.referral_code}
                            onChange={(e) => setData('referral_code', e.target.value)}
                            disabled={processing || Boolean(ref)}
                            placeholder="Referral Code"
                        />
                        <InputError message={errors.referral_code} />
                    </div>}

                    <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Créer un compte
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Vous avez déjà un compte?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Connexion
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
