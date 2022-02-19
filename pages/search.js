import Head from "next/head";
import Player from "../common/Player";
import Sidebar from "../common/Sidebar";
import Search from "../components/Search";

export default function search() {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search />
    </>
  );
}
