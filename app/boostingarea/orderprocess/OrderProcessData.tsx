import React from "react";
import Image from "next/image";
import lolicon from "./../../assets/images/lolicon.png";
import viewicon from "./../../assets/images/view.png";
import styles from "../BoostArea.module.css";
import Link from "next/link";
import ViewProcessOrder from "./ViewProcessOrder";

const OrderProcessData = (props) => {
  const orders = props.orders;

  function vieworderchange() {
    console.log("1");
  }

  console.log(props, orders);
  return (
    <>
      {orders.map((order) => (
        <tr className={styles.NewOrders} key={order.id}>
          <td>
            <span className={styles.OrderID}>#{order.boostid}</span>
            <span className={styles.OrderDate}>{order.boostdate}</span>
          </td>
          <td>
            {" "}
            <Image
              src={lolicon}
              width={30}
              height={30}
              alt="dashicon"
              className="float-left"
            />
            <span className={styles.GameText}>{order.gameboost}</span>
          </td>
          <td>
            <span className={styles.TextQueue}>{order.boosttype}</span>
          </td>
          <td>
            <span className={styles.BoosterText}>{order.assignboost}</span>
          </td>
          <td>
            <span className={styles.StatusText}>{order.orderstatus}</span>
          </td>
          <td>
            <Image
              src={viewicon}
              width={20}
              height={20}
              alt="viewicon"
              className="float-left mt-1.5"
            />
            <span className={styles.ViewOrder}>
              <Link href="./boostingarea/myorders">View Order</Link>
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderProcessData;
