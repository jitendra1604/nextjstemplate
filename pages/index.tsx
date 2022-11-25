import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import styles from "../styles/components/Home.module.scss";
import { Layout } from "../components";
import Homepage from "./Homepage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acreda</title>
        <meta name="description" content="PS group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
};

export default Home;
