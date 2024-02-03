import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers"
import Home from "./page";
import { account, mails } from "@/helper/mockdata";
import { Sidebar } from "lucide-react";
import Layout from "@/components/mylayout";

const inter = Inter({ subsets: ["latin"] });

  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  // const defaultLayout = layout ? JSON.parse(layout.value) : {}
  // const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : {};
  const defaultLayout = [265, 440, 655]
  const defaultCollapsed = false;

	const navCollapsedSize = 4;

export const metadata: Metadata = {
  title: "Office",
  description: "Our datacenter workstation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
        <div className="router-content p-4 h-full w-full">{children}</div>
      </Layout>
      
      </body>
    </html>
  );
}
