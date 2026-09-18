'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/clients';

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-sm text-neutral-400 hover:text-red-400 transition-colors"
    >
      Sign Out
    </button>
  );
}
