import HeaderComponent from "@/components/HeaderComponent";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <hr />
        {children}
      </body>
    </html>
  );
}
