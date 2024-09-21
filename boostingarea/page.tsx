import React from "react";
import BoosterNav from "../components/BoosterNav";
import TopHeader from "../components/TopHeader";
import AmountEarned from "./amountearned/AmountEarned";
import OrderComplete from "./ordercomplete/OrderComplete";
import ActiveBoostBox from "./ActiveBoost/ActiveBoostBox";
import OrderProcess from "./orderprocess/OrderProcessBox";

const BoostingArea = () => {
  return (
    <div>
      <BoosterNav />
      <TopHeader />
      <AmountEarned />
      <OrderComplete />
      <ActiveBoostBox />
      <OrderProcess />
    </div>
  );
};

export default BoostingArea;
