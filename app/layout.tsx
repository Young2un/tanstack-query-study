import { Metadata } from "next";
import "./globals.css";
import ClientProvider from "./providers/ClientProvider";

export const metadata: Metadata = {
  title: "TanStack Query Playground",
  description: "비공식 공식문서 데모",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 py-12 px-40">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
