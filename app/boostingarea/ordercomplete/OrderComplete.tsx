import React from "react";
import styles from "../BoostArea.module.css";
import ordericon from "./../../assets/images/ordercomp.png";
import Image from "next/image";

const OrderComplete = () => {
  var OrderDone = "206";
  return (
    <>
      <div className={styles.CompleteBox}>
        <Image
          className={styles.OrderIcon}
          src={ordericon}
          alt="ordericon"
        ></Image>
        <span className={styles.OrderHeading}>Orders Completed</span>
        <span className={styles.OrderDone}>{OrderDone}</span>
        <div className={styles.OrderDisclaimer}>
          <p>
            This represents the total orders completed by you on this platform.
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderComplete;
