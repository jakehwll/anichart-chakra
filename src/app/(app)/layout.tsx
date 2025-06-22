"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const ANILIST_GRAPHQL_ENDPOINT = "https://graphql.anilist.co";
const client = new ApolloClient({
  uri: ANILIST_GRAPHQL_ENDPOINT,
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
