import "./globals.css";
import ClientProvider from "./providers/ClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 px-6 py-12 px-40">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
