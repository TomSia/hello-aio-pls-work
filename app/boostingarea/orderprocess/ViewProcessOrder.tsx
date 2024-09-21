"use client";

import React, { useEffect } from "react";
import styles from "../myorders/MyOrders.module.css";

function ViewProcessOrder(props) {
  const orderid = props;
  useEffect(() => {
    console.log(orderid);
  });
  return (
    <div className={styles.ViewOrderBox}>
      <h1>League of Legends</h1>
    </div>
  );
}

export default ViewProcessOrder;
