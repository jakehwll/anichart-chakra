"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.VERCEL_URL ?? "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

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
      <ApolloProvider client={client}>{children}</ApolloProvider>
      {modal}
      <Footer />
    </>
  );
}
