// ── Supabase Client Placeholder ──────────────────────────────────────
// Uncomment and configure when ready for backend integration.
//
// import { createClient } from "@supabase/supabase-js";
//
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
//
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
//
// ── Integration Points ───────────────────────────────────────────────
//
// AUTH
//   supabase.auth.signInWithOtp({ email })
//   supabase.auth.signOut()
//   supabase.auth.getUser()
//
// ITEMS (CRUD)
//   supabase.from("items").select("*, seller:users(*)")
//   supabase.from("items").insert({ ... })
//   supabase.from("items").update({ isSold: true }).eq("id", itemId)
//   supabase.from("items").delete().eq("id", itemId)
//
// CHAT (Realtime)
//   supabase.from("messages").insert({ senderId, text, conversationId })
//   supabase.channel("chat").on("postgres_changes", ...).subscribe()
//
// STORAGE (Image Uploads)
//   supabase.storage.from("item-images").upload(path, file)
//   supabase.storage.from("item-images").getPublicUrl(path)
//
// ─────────────────────────────────────────────────────────────────────

export { };
