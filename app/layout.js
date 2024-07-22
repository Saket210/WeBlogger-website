import { Aclonica } from "next/font/google";
import "./globals.css";

const aclonica = Aclonica({ subsets: ["latin"], weight:["400"]});

export const metadata = {
  title: "We Blogger",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aclonica.className}>{children}</body>
    </html>
  );
}
