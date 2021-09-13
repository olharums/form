import { SiVisa, SiMastercard } from "react-icons/si/index";
const CardMethod = (props) => (
  <div id="cardMethod" className={props.selection}>
    <SiMastercard className="icon icon-45" />
    <SiVisa className="icon icon-50" />
    <p>Карта Visa/MasterCard</p>
  </div>
);
export default CardMethod;
