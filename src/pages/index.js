import Head from "next/head";
import Title from "../components/Title";
import ServerStatus from "../components/ServerStatus";
import DatabaseEntry from "../components/DatabaseEntry";
import styles from "./Index.module.scss";

export const IndexPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Padaster Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Title />
        <div className={styles.subContainer}>
          <ServerStatus />
          <DatabaseEntry />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
