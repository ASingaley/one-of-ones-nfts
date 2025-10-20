import type { Metadata } from "next";
import './globals.css';
import ContextProvider from '@/context'

export const metadata: Metadata = {
  title: "one-of-one-nfts",
  description: "one of one nft mints",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ContextProvider cookies={null}>{children}</ContextProvider>
      </body>
    </html>
  );
}