import { Inter } from "next/font/google";
import "../../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Timelock",
  description: "It safer to lock your money",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className={inter.className}>{children}</body>

    </html>

  );
}
