import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Spennato | Consultor en Migraciones e Infraestructura",
  description:
    "Consultor especializado en modernización de sistemas legacy, desarrollo de firmware embebido y liderazgo técnico. 25 años de experiencia en ingeniería de sistemas.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
