import React from "react";
import Image from "next/image";
import tfticon from "./../../assets/images/tfticon.png";
import boosticon from "../../assets/images/boosticon.png";
import styles from "../BoostArea.module.css";

const ActiveBoostBox = () => {
  var GameTitle = "Teamfight Tatics";
  var Cost = "$212.22";
  var BoostID = "123576";
  return (
    <div className={styles.ABoostCon}>
      <div className={styles.BoostHeader}>
        <Image
          src={boosticon}
          alt="boosticon"
          className={styles.BoostIcon}
          width={20}
          height={20}
        ></Image>
        <h1>Active Boost</h1>
      </div>
      <div className={styles.ABoostBox}>
        <Image
          src={tfticon}
          width={70}
          height={70}
          alt="dashicon"
          className="mt-5 m-auto"
        />
        <h1 className={styles.ABTitle}>{GameTitle}</h1>
        <p className={styles.ProgText}>Progress: 63%</p>
        <div className={styles.ProgBar}></div>
        <h1 className={styles.CostText}>{Cost}</h1>
        <p className={styles.BoostID}>Boost ID#{BoostID}</p>
      </div>
    </div>
  );
};

export default ActiveBoostBox;
