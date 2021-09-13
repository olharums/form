import React, { useState } from "react";
import { SiPaypal } from "react-icons/si/index";
import { GrAtm } from "react-icons/gr/index";
import CardMethod from "./CardMethod";
import WebMoneyMethod from "./WebMoneyMethod";
import CardForm from "./CardForm";
const FinanceHelp = (props) => {
  const [selectionCard, setSelectionCard] = useState("");
  const [selectionPrivat, setSelectionPrivat] = useState("selectedMethod");
  const [selectionATM, setSelectionATM] = useState("");
  const [selectionWebMoney, setSelectionWebMoney] = useState("");
  const [selectionPayPal, setSelectionPayPal] = useState("");

  const onClickDivHandle = (event) => {
    if (event.target.id === "cardMethod") {
      setSelectionCard("selectedMethod");
      setSelectionATM("");
      setSelectionPrivat("");
      setSelectionWebMoney("");
      setSelectionPayPal("");
    } else if (event.target.id === "privat24Method") {
      setSelectionCard("");
      setSelectionATM("");
      setSelectionPrivat("selectedMethod");
      setSelectionWebMoney("");
      setSelectionPayPal("");
    } else if (event.target.id === "ATMMethod") {
      setSelectionCard("");
      setSelectionATM("selectedMethod");
      setSelectionPrivat("");
      setSelectionWebMoney("");
      setSelectionPayPal("");
    } else if (event.target.id === "webMoneyMethod") {
      setSelectionCard("");
      setSelectionATM("");
      setSelectionPrivat("");
      setSelectionWebMoney("selectedMethod");
      setSelectionPayPal("");
    } else if (event.target.id === "payPalMethod") {
      setSelectionCard("");
      setSelectionATM("");
      setSelectionPrivat("");
      setSelectionWebMoney("");
      setSelectionPayPal("selectedMethod");
    }
  };

  return (
    <div className={"financeHelp " + props.display}>
      <div>
        <h3>Спосіб оплати</h3>
        <div className="payMethods" onClick={onClickDivHandle}>
          <CardMethod selection={selectionCard} />
          <div id="privat24Method" className={selectionPrivat}>
            <h2>Приват24</h2>
            <p>Приват24</p>
          </div>
          <div id="ATMMethod" className={selectionATM}>
            <GrAtm className="icon" />
            <p>Термінали України</p>
          </div>
          <WebMoneyMethod selection={selectionWebMoney} />
          <div id="payPalMethod" className={selectionPayPal}>
            <SiPaypal className="icon" />
            <p>PayPal</p>
          </div>
        </div>
      </div>
      <CardForm />
    </div>
  );
};
export default FinanceHelp;
