import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Gate — Delivery & Material Log', description: 'Gate security delivery and material log app replica' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
