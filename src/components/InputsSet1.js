import React, { useState } from "react";
import Input from "./Input";
import "../App.css";
const InputsSet1 = () => {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const emailHandler = (event) => {
    if (checkEmail(event.target.value)) {
      setEmail(event.target.value);
      event.target.style.backgroundColor = "";
    } else {
      setEmail(event.target.value);
      event.target.style.backgroundColor = "#ffb3b3";
    }
  };
  const checkEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return re.test(email);
  };

  return (
    <div id="inputSet">
      <div id="containerShortInputs">
        <div>
          {" "}
          <Input
            label="Ім'я"
            inputName="userName"
            kindInputWidth="short"
            value={userName}
            handler={(e) => setUserName(e.target.value)}
          />
        </div>{" "}
        <div>
          <Input
            label="Фамілія"
            inputName="userSurname"
            kindInputWidth="short"
            value={userSurname}
            handler={(e) => setUserSurname(e.target.value)}
          />
        </div>
      </div>
      <div id="inputLogoNameCompany">
        <Input
          label="Назва компанії, організації"
          inputName="companyName"
          kindInputWidth="long"
          value={companyName}
          handler={(e) => setCompanyName(e.target.value)}
        />
        <label id="logoLabel">
          <input name="logo" type="file" />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp; Логотип
        </label>
      </div>
      <Input
        label="Email-адрес"
        inputName="email"
        kindInputWidth="long"
        value={email}
        handler={emailHandler}
      />
      <Input
        label="Номер телефону"
        inputName="phoneNumber"
        kindInputWidth="long"
        value={phoneNumber}
        handler={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
};

export default InputsSet1;
