import type { Metadata } from "next";
import '@/app/globals.css';


export const metadata: Metadata = {
  title: "Pets",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>{children}</main>

  );
}