import React from "react";
import styles from "../BoostArea.module.css";
import walleticon from "./../../assets/images/walleticon.png";
import Image from "next/image";

const AmountEarned = () => {
  var MoneyMade = "$1,112.65";
  return (
    <>
      <div className={styles.AmountBox}>
        <Image
          className={styles.WalletIcon}
          src={walleticon}
          alt="walleticon"
        ></Image>
        <span className={styles.AmountHeading}>Amount Earned</span>
        <span className={styles.MoneyMade}>{MoneyMade}</span>
        <div className={styles.AnountDisclaimer}>
          <p>
            This represents the total amount earned by you on this platform.
          </p>
        </div>
      </div>
    </>
  );
};

export default AmountEarned;
