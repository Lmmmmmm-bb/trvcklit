import { createClient } from '@supabase/supabase-js';

const { APP_SUPA_URL, APP_SUPA_KEY } = import.meta.env;
const supabase = createClient(APP_SUPA_URL, APP_SUPA_KEY);

export const useSupa = () => supabase;
