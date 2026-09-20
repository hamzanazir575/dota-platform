import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next');

  if (!code) {
    return NextResponse.redirect(
      new URL('/?error=auth_callback', requestUrl.origin),
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL('/?error=auth_callback', requestUrl.origin),
    );
  }

  const allowedNextPaths = ['/update-password'];

  const redirectPath = allowedNextPaths.includes(next) ? next : '/';

  return NextResponse.redirect(new URL(redirectPath, requestUrl.origin));
}
