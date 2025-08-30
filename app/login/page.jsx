"use client";
import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
  const { data, status } = useSession();

  console.log(data, status);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          className={styles.socialButton}
          onClick={() => signIn("google")}
        >
          Login with Google
        </button>
        <button className={styles.socialButton}>Login with GitHub</button>
        <button className={styles.socialButton}>Login with Facebook</button>
      </div>
    </div>
  );
};

export default LoginPage;
