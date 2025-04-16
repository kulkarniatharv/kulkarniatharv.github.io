import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider"

export const metadata: Metadata = {
  title: "Atharv Kulkarni - Software Engineer",
  description: "Personal website and portfolio of Atharv Kulkarni, software engineer and developer.",
  keywords: ["Atharv Kulkarni", "software engineer", "developer", "portfolio", "React", "Next.js"],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
