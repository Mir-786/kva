# Gate App UI Replica

A responsive Next.js + React + TypeScript + Tailwind CSS recreation inspired by the supplied Gate app screenshot. Includes Material/Deliveries/Approvals/Vehicles/Passes tabs, date selector, delivery cards, void action, notification toast, theme toggle, bottom navigation, and a working new-record modal.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the framework preset as **Next.js** and deploy. No environment variables are required.

Note: This is a frontend UI replica with local in-memory demo data. Data resets on refresh; connect a database/API if you need real gate/security records to persist across devices.
