import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>project_name</title>
        <meta name="description" content="project_name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>Welcome to project_name</>
    </div>
  );
};

export default Home;
