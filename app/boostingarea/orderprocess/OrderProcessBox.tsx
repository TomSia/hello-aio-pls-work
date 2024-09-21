"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import searchicon from "./../../assets/images/search.png";
import plusicon from "./../../assets/images/plus.png";
import styles from "../BoostArea.module.css";
import OrderProcessData from "./OrderProcessData";

function ActiveBoostBox() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/orders")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  return (
    <div className={styles.OrderProCon}>
      <div className={styles.FilterOrders}>
        <div className={styles.SearchBar}>
          <Image
            src={searchicon}
            width={17}
            height={17}
            alt="dashicon"
            className="float-left mt-2.5 ml-4"
          />
          <h1 className="float-left ml-2 opacity-0.1">Search</h1>
        </div>
        <div className={styles.FilterGame}>
          <Image
            src={plusicon}
            width={12}
            height={12}
            alt="dashicon"
            className="float-left mt-2.5 ml-4 mr-2"
          />
          <h1 className={styles.SelectText}>Select Game</h1>
        </div>
        <div className={styles.FilterGame}>
          <Image
            src={plusicon}
            width={12}
            height={12}
            alt="dashicon"
            className="float-left mt-2.5 ml-4 mr-2"
          />
          <h1 className={styles.SelectText}>Select Queue</h1>
        </div>
      </div>
      <div className={styles.OrderContainer}>
        <table className={styles.OrderBox}>
          <tbody>
            <tr className={styles.RowHeading}>
              <th>BOOST ID</th>
              <th>GAME</th>
              <th>QUEUE</th>
              <th>BOOSTER</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
            {orders && <OrderProcessData orders={orders} />}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveBoostBox;
