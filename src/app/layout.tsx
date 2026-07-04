import type { Metadata } from "next";
import { Oswald, Sora, Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ['latin'] });


const oswald = Oswald({
  variable: "--font-face-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-face-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-face-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: 'Skate | Make Your Own Custom Skateboard',
  description: 'The best e-commerce store to build and buy your custom skateboards.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${sora.variable} ${roboto.variable} ${inter.className} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
