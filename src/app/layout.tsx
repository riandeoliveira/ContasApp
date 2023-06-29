import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "styles/global.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  authors: [{ name: "Rian Oliveira", url: "https://github.com/riandeoliveira" }],
  description: "Meu app de contas.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "react"
  ],
  themeColor: [{ color: "#ffffff", media: "(prefers-color-scheme: dark)" }],
  title: "Contas App",
};

const roboto = Roboto({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
