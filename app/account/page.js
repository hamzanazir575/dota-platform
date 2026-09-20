import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import AccountForm from '@/app/_components/AccountForm';

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/signin');
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('display_name, bio, avatar_url')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Profile fetch error:', error);
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="text-sm text-neutral-400 transition-colors hover:text-red-400"
        >
          ← Back home
        </Link>

        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              Dota 2 Platform
            </p>

            <h1 className="mt-2 text-3xl font-bold">My Account</h1>

            <p className="mt-2 text-neutral-400">
              Manage your account information.
            </p>
          </div>

          <div className="mt-8 border-b border-neutral-800 pb-6">
            <p className="text-sm text-neutral-500">Email</p>

            <p className="mt-1 text-lg text-neutral-200">{user.email}</p>
          </div>

          <AccountForm
            userId={user.id}
            initialName={profile?.display_name ?? ''}
            initialBio={profile?.bio ?? ''}
          />
        </div>
      </div>
    </main>
  );
}
