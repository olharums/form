import { SiWebmoney } from "react-icons/si/index";
const WebMoneyMethod = (props) => (
  <div id="webMoneyMethod" className={props.selection}>
    <div>
      <h3>WebMoney</h3>
      <SiWebmoney className="icon" />
    </div>
    <p>WebMoney</p>
  </div>
);
export default WebMoneyMethod;
