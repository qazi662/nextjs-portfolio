import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import styles from "../styles/Layout.module.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const Layout = ({ children, title }) => (
  <div className={styles.root}>
    <Head>
      <title>Next Portfolio</title>
    </Head>
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.navLink}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.navLink}>About</a>
      </Link>
      <Link href="/hireme">
        <a className={styles.navLink}>Hire Me</a>
      </Link>
      <Link href="/blog">
        <a className={styles.navLink}>Blog</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
  </div>
);
export default Layout;
