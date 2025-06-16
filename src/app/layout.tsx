import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import Header from "@/components/Header"
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AniChart",
  description: "Keep up with the buzz and find out what everyone's reading today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
