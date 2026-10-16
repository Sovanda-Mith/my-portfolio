import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Goals | MITH Sovanda",
  description: "The personal and professional goals that keep Mith Sovanda moving forward.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
