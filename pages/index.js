import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "../components/homepage";
import Navbar from "../components/navigation";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </Head>
      <HomePage />
    </div>
  );
}
