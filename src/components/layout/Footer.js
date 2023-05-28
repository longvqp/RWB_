import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  const logo = require("../../assets/RAUH-WELT-black.png");
  return (
    <footer className={classes.footer}>
      <div className={classes.leftFoot}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="logo" />{" "}
        </Link>
        <p>
          RWB/RAUH-Welt BEGRIFF is a Porsche tuner located in Japan. RWB has
          combined Japanese and Euro tuning elements, creating the distinct RWB
          style for Porsche chassis.
        </p>
      </div>
      <div className={classes.midFoot}>
        <ul>
          <li>
          <Link to="/about">
        About us
        </Link>
          </li>

          <li>
          <Link to="/about">
        Oneline store
        </Link>
          </li>

          <li><Link to="/about">
        Our build
        </Link></li>
          <li><Link to="/about">
        Contact us
        </Link></li>
        </ul>
        
       
        
        
      </div>
    </footer>
  );
}
export default Footer;
