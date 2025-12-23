import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Archivist's Shelf",
  description: "A tactile portfolio experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

