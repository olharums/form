import React from "react";
import { useState } from "react";
import Input from "./Input";

const InputsSet2 = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  return (
    <div id="inputSet">
      <Input
        label="Країна"
        inputName="country"
        kindInputWidth="long"
        value={country}
        handler={(e) => setCountry(e.target.value)}
      />
      <div id="containerShortInputs">
        <div>
          <Input
            label="Місто"
            inputName="city"
            kindInputWidth="short"
            value={city}
            handler={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <Input
            label="Штат, район"
            inputName="district"
            kindInputWidth="short"
            value={district}
            handler={(e) => setDistrict(e.target.value)}
          />
        </div>
      </div>
      <Input
        label="Адреса"
        inputName="address"
        kindInputWidth="long"
        value={address}
        handler={(e) => setAddress(e.target.value)}
      />
      <Input
        label="Поштовий індекс"
        inputName="postcode"
        kindInputWidth="short"
        value={postcode}
        handler={(e) => setPostcode(e.target.value)}
      />
    </div>
  );
};

export default InputsSet2;
