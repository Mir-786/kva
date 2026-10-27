# Gate App Replica

A responsive Next.js + React + TypeScript + Tailwind CSS frontend inspired by the supplied Gate app screenshots.

## Included tabs
- Today: visitor list, search, status badges, call actions, approval action
- Scan: pass-code verification interface (camera area is a visual placeholder)
- Walk-in: visitor registration form
- Approvals: pending visitor approvals and call actions
- Vehicles: vehicle-out records, vehicle-in and cancel actions, add vehicle form
- Material: delivery records, new delivery form, void action

The native phone status/notification bar is not rendered by the web app. Text sizes and green/cream styling are matched to the reference images.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Push this folder to GitHub and import the repository into Vercel. This is a frontend demo; data is held in React state and is reset on refresh. Connect Firebase or another backend for persistent, shared records, authentication, and real QR scanning.
