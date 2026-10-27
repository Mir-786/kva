# Gate App Replica

Mobile-first Next.js, React, TypeScript and Tailwind CSS UI inspired by the supplied Gate screenshots.

## Material tab
- **Passes** records material leaving the institute (material-out pass, taken-out-by person, destination/department, quantity and optional amount).
- **Deliveries** records products arriving at the institute (delivery entry, recipient, vendor, quantity and optional amount).
- Search records by item, person, company/vendor or record code.
- Filter by month, start date and end date, then press Search to apply filters.
- Void a record to hide it from the active list.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Push this folder to GitHub and import the repository in Vercel. Select Next.js.

## Demo limitation
This is a frontend prototype. Records are held in React state and reset on refresh; connect a database such as Firebase or Supabase for persistent storage and synchronization.
