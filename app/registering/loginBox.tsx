"use client";

import React from "react";
import styles from "./../page.module.css";
import Image from "next/image";
import LoginArt from "./../assets/images/loginart.png";
import LoginScript from "./LoginScript";

const loginPage = () => {
  return (
    <div className={styles.Logincontainer}>
      <form className={styles.LoginDetails} action={LoginScript}>
        <h1>Login</h1>
        <h2>Dont have an account? Create one here.</h2>
        <p>Or Login email</p>
        <input
          name="Username"
          type="email"
          placeholder="Email"
          className={styles.userName}
        />
        <br></br>
        <input
          name="Password"
          type="password"
          placeholder="Password"
          className={styles.passWord}
        />
        <br></br>
        <button className={styles.continue} type="submit" value="Submit">
          Continue
        </button>
        <p className={styles.terms}>
          By creating an account, you agree to our Terms of Service & Privacy
          Policy.
        </p>
      </form>
      <div className={styles.LoginArt}>
        <Image
          className={styles.LoginImg}
          src={LoginArt}
          alt="loginart"
        ></Image>
      </div>
    </div>
  );
};

export default loginPage;
