import "@styles/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Typewriter } from "@components/Typewriter";
import Link from "next/link";
import Image from "next/image";

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
      <body className={font.className}>
        <main className="flex min-h-screen flex-col items-center justify-start space-y-14 bg-background pt-14 text-slate-50">
          <header className="flex h-44 w-44 flex-col items-center justify-between">
            <Typewriter />

            <Link href="/">
              <Image
                height={144}
                width={144}
                // className="h-36 cursor-pointer rounded-full"
                alt="vini profile photo"
                src="https://github.com/ovinidev.png"
              />
            </Link>
          </header>

          {children}
        </main>
      </body>
    </html>
  );
}
