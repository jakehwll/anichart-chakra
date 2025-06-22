import Providers from "@/components/Providers";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AniChart",
  description:
    "Keep up with the buzz and find out what everyone's reading today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Providers>{children}</Providers>
        </ChakraProvider>
      </body>
    </html>
  );
}
