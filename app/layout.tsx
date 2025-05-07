import ClientProvider from "./providers/ClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kn">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
