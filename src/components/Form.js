import React, { useState } from "react";
import HelpList from "./HelpList";
import InputsSet1 from "./InputsSet1";
import InputsSet2 from "./InputsSet2";
import "../App.css";
const Form = () => {
  const [buttonIndividual, setbuttonIndividual] = useState("selected");
  const [buttonLegalEntity, setbuttonLegalEntity] = useState("");
  let buttonIndividualOnClickHandler = (e) => {
    e.preventDefault();
    if (buttonIndividual === "") {
      setbuttonIndividual("selected");
      setbuttonLegalEntity("");
    }
  };
  let buttonLegalEntityOnClickHandler = (e) => {
    e.preventDefault();
    if (buttonLegalEntity === "") {
      setbuttonLegalEntity("selected");
      setbuttonIndividual("");
    }
  };
  return (
    <div>
      <form>
        <button id="exitButton" onClick={(e) => e.preventDefault()}>
          <h1>&#215;</h1>
        </button>

        <div id="formContainer">
          <h1>Заповніть форму</h1>
          <div id="buttonsContainer">
            <button
              className={buttonIndividual}
              id="individual"
              onClick={buttonIndividualOnClickHandler}
            >
              Фіз. особа
            </button>
            <button
              className={buttonLegalEntity}
              id="legalEntity"
              onClick={buttonLegalEntityOnClickHandler}
            >
              Юр. особа
            </button>
          </div>
          <div id="inputsContainer">
            <InputsSet1 />
            <InputsSet2 />
          </div>
          <h1 id="titleHelpKinds">Види допомоги</h1>
          <p id="subtitle">Ви можете змінити вид допомоги</p>
          <HelpList />
          <button
            type="submit"
            id="buttonHelp"
            onClick={(e) => e.preventDefault()}
          >
            Допомогти
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
