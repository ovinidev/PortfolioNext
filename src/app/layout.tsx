import "@styles/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vini Medeiros",
  description: "Portfólio pessoal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="https://github.com/ovinidev.png" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
