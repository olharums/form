import React from "react";
import { IoHandRightOutline, IoHeartOutline } from "react-icons/io5/index";
import { GiClothes, GiWallet } from "react-icons/gi/index";
import FinanceHelp from "./FinanceHelp";
import { useState } from "react";
const HelpList = () => {
  const [financeHelpDisplay, setFinanceHelpDisplay] = useState("");

  const [doHelpSelected, setDoHelpSelected] = useState("");
  const [donationHelpSelected, setDonationHelpSelected] =
    useState("helpKindSelected");
  const [clothesHelpSelected, setClothesHelpSelected] = useState("");
  const [volunteeringHelpSelected, setVolunteeringHelpSelected] = useState("");

  const [marginLeftArrow, setMarginLeftArrow] = useState("donation");

  const onClickDivHandle = (event) => {
    if (event.target.id === "donation") {
      setDonationHelpSelected("helpKindSelected");
      setDoHelpSelected("");
      setClothesHelpSelected("");
      setVolunteeringHelpSelected("");
      setFinanceHelpDisplay("");
      setMarginLeftArrow("donation");
    } else if (event.target.id === "do") {
      setDonationHelpSelected("");
      setDoHelpSelected("helpKindSelected");
      setClothesHelpSelected("");
      setVolunteeringHelpSelected("");
      setFinanceHelpDisplay("no-display");
      setMarginLeftArrow("do");
    } else if (event.target.id === "clothes") {
      setDonationHelpSelected("");
      setDoHelpSelected("");
      setClothesHelpSelected("helpKindSelected");
      setVolunteeringHelpSelected("");
      setFinanceHelpDisplay("no-display");
      setMarginLeftArrow("clothes");
    } else if (event.target.id === "volunteering") {
      setDonationHelpSelected("");
      setDoHelpSelected("");
      setClothesHelpSelected("");
      setVolunteeringHelpSelected("helpKindSelected");
      setFinanceHelpDisplay("no-display");
      setMarginLeftArrow("volunteering");
    }
  };
  return (
    <div>
      <div className="helpKinds" onClick={onClickDivHandle}>
        <div className={"helpKind " + doHelpSelected} id="do">
          <div className="iconContainer">
            <IoHandRightOutline className="icon" />
          </div>
          <h2 style={{ lineHeight: "2em" }}>Зробити</h2>
        </div>
        <div className={"helpKind " + donationHelpSelected} id="donation">
          <div className="iconContainer">
            <GiWallet className="icon" />
          </div>
          <h2>
            Фінансова
            <br />
            допомога
          </h2>
        </div>
        <div className={"helpKind " + clothesHelpSelected} id="clothes">
          <div className="iconContainer">
            <GiClothes className="icon" />
          </div>
          <h2>
            Матеріальна
            <br />
            допомога
          </h2>
        </div>
        <div
          className={"helpKind " + volunteeringHelpSelected}
          id="volunteering"
        >
          <div className="iconContainer">
            <IoHeartOutline className="icon" />
          </div>
          <h2 style={{ lineHeight: "2em" }}>Волонтерство</h2>
        </div>
      </div>
      <div className={"helpKindFrame " + marginLeftArrow}>
        <FinanceHelp display={financeHelpDisplay} />
      </div>
    </div>
  );
};
export default HelpList;
