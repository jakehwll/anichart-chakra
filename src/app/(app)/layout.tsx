"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      {modal}
      <Footer />
    </>
  );
}
