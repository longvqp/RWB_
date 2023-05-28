import classes from "./Landing.module.css";

function Landing() {
  const vide = require("../assets/video.mp4");
  return (
    <div>
      <div className={classes.backdrop}>
        <div className={classes.textContainer}>
          <h1 className={classes.heading}>
            Change your life with<b> RWB </b>{" "}
          </h1>
          <h2 className={classes.subheading}>
            RWB / RAUH-Welt BEGRIFF is a Porsche tuner located in Japan.
          </h2>
          <h2 className={classes.subheading}>
            <b>
              <u>@RWBJP</u>
            </b>
          </h2>
          <button className={classes.joinBtn}>Join our family</button>
        </div>
      </div>
      <div className={classes.vidContainer}>
        <video autoPlay loop muted class={classes.vid}>
          <source src={vide} type="video/mp4" />
        </video>
      </div>

      <div className={classes.content}>
          <div className={classes.main}>
                <p>content</p>
        </div>
      </div>
    </div>
  );
}
export default Landing;
