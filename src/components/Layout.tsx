import Head from "next/head";
import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Captain</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}
    </>
  );
}
