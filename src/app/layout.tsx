import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./global.scss";

const firaCode = Fira_Code({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Todo App",
  description: "trying to make something i guess",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <div className="flex bg-rosePine-surface justify-center items-center">
          <h1 className="p-5 text-3xl">Todo</h1>
        </div>
        <div id="page">{children}</div>
      </body>
    </html>
  );
}
