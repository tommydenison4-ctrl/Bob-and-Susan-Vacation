# Bob & Susan Travel — Mediterranean 2026

A mobile-first dark-mode travel companion built from Bob & Susan's trip book.

<!-- deployment refresh retry 2026-09-25 -->

## Included now
- Nov 12–26 itinerary and day pages
- Port-day ship departure countdowns, with a separate `allAboard` field so the app never invents one
- GPS-ready **Back to Ship** distance + Google Maps walking directions
- Detailed daily route maps/stops reconstructed from the uploaded trip book
- Open-full-route links to Google Maps
- Live weather via Open-Meteo when internet is available, with trip-book weather guidance as fallback
- CAD currency converter with live-rate attempt and fallback planning rates
- Destination local time, tipping, emergency numbers and phrases
- Oceania Marina cruise hub, cabin and dining reservations
- Memories camera/photo picker, geotagging, voice dictation, personal story, local journal
- Landmark candidate flow using GPS + itinerary now; API endpoint is ready for a vision model key later
- Private documents-vault structure
- PWA manifest + service worker/offline shell
- Supabase-ready schema for auth, trip data, routes, memories and documents
- Standalone `index.html` preview as well as the real Next.js app

## Run the real app
1. Install Node.js 20+.
2. In this folder run:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Deploy to Vercel
Push this folder to a GitHub repository, import the repo in Vercel, and deploy. No Supabase variables are required for the local-data build.

## Supabase — connect later
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Create private Storage buckets named `memories` and `documents`.
4. Copy `.env.example` to `.env.local` and add keys.
5. Add Bob/Susan/admin auth accounts and row-level-security policies.
6. Move the local trip dataset to the database when the UI is approved.

## Landmark recognition
`/api/landmark` is already wired into the Memories flow. Today it uses the selected trip day + GPS proximity to propose a planned landmark. To recognize the actual contents of the image, connect a vision-capable model in that endpoint and keep the user-confirmation step.

## Privacy
Do not hardcode passport numbers, health-card numbers, insurance-policy numbers, or ticket identifiers into `data/trip.ts` or any public page. Store them only in the authenticated private document vault.
