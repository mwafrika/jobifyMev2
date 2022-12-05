import main from "../assets/images/main.svg";
import alternative from "../assets/images/main-alternative.svg";
import hunter from "../assets/images/hunter.svg";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Landing = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/register");
  };

  const images = [main, alternative, hunter];

  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking </span>app
          </h1>
          <p>
            Huntify Tracks your job applications and keep your job search
            organized, all in one place. No more spreadsheets, no more emails,
            no more lost job applications.
          </p>

          <button className="btn btn-hero" onClick={handleNavigate}>
            Login/Register
          </button>
        </div>

        <div className="slide-container">
          <Fade arrows={false} autoplay={true} duration={5000}>
            <div className="each-fade">
              <img src={images[0]} />
            </div>
            <div className="each-fade">
              <img src={images[1]} />
            </div>
            <div className="each-fade">
              <img src={images[2]} />
            </div>
          </Fade>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
