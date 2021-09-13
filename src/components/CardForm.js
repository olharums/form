import { useState } from "react";
const CardForm = () => {
  const [first4CardNumbers, setFirst4CardNumbers] = useState("");
  const [second4CardNumbers, setSecond4CardNumbers] = useState("");
  const [third4CardNumbers, setThird4CardNumbers] = useState("");
  const [fourth4CardNumbers, setFourth4CardNumbers] = useState("");

  const [validityPeriod, setValidityPeriod] = useState("");

  const [CVV, setCVV] = useState("");

  const onChangeHandler1 = (event) => {
    if (event.target.value > 4) {
      setFirst4CardNumbers(event.target.value.slice(0, 4));
    } else setFirst4CardNumbers(event.target.value);
  };
  const onChangeHandler2 = (event) => {
    if (event.target.value > 4) {
      setSecond4CardNumbers(event.target.value.slice(0, 4));
    } else setSecond4CardNumbers(event.target.value);
  };
  const onChangeHandler3 = (event) => {
    if (event.target.value > 4) {
      setThird4CardNumbers(event.target.value.slice(0, 4));
    } else setThird4CardNumbers(event.target.value);
  };
  const onChangeHandler4 = (event) => {
    if (event.target.value > 4) {
      setFourth4CardNumbers(event.target.value.slice(0, 4));
    } else setFourth4CardNumbers(event.target.value);
  };
  const onChangeHandlerValPeriod = (event) => {
    if (event.target.value.length == 2) {
      setValidityPeriod(event.target.value + "/");
    } else if (event.target.value.length > 5) {
      setValidityPeriod(event.target.value.slice(0, 5));
    } else setValidityPeriod(event.target.value);
  };
  const onChangeHandlerCVV = (event) => {
    setCVV(event.target.value);
  };
  return (
    <div id="cardContainer">
      <h3>Введіть наступні данні</h3>
      <div id="cardForm">
        <div className="cardNumber">
          <h3>Номер карти</h3>
          <div>
            <input
              name="first4CardNumbers"
              type="number"
              onChange={onChangeHandler1}
              value={first4CardNumbers}
            />
            <input
              name="second4CardNumbers"
              type="number"
              onChange={onChangeHandler2}
              value={second4CardNumbers}
            />
            <input
              name="third4CardNumbers"
              type="number"
              onChange={onChangeHandler3}
              value={third4CardNumbers}
            />
            <input
              name="fourth4CardNumbers"
              type="number"
              onChange={onChangeHandler4}
              value={fourth4CardNumbers}
            />
          </div>
        </div>
        <div className="cardInfo">
          <label>
            <h3>Термін дії</h3>
            <input
              name="validityPeriod"
              type="text"
              onChange={onChangeHandlerValPeriod}
              value={validityPeriod}
            />
          </label>
          <label>
            <h3>CVC/CVV</h3>
            <input
              name="CVC/CVV"
              type="password"
              maxlength="3"
              onChange={onChangeHandlerCVV}
              value={CVV}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
export default CardForm;
