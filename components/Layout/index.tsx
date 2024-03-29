import Head from "next/head";
import React from "react";
import ChannelList from "../Sidebar";
import { RightWrapper, LeftWrapper, PageContainer } from "./index.style";
import Navbar from "../Navbar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <title>Title set in title tag</title>
        <meta property="og:title" content="Title changed from meta tag" key="title" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}
