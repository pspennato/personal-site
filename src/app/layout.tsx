import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Spennato - Migration Specialist",
  description:
    "Legacy Systems Migration Specialist with 25+ years of experience",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en"> 
      <body>{children}</body>
    </html>
  );
}
