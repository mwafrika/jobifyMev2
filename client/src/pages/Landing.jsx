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

  // const images = [
  //   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];

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
            Jobify Tracks your job applications and keep your job search
            organized, all in one place. No more spreadsheets, no more emails,
            no more lost job applications.
          </p>

          <button className="btn btn-hero" onClick={handleNavigate}>
            Login/Register
          </button>
        </div>

        <div className="slide-container">
          <Fade arrows={false} autoplay={true} duration={3000}>
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
        {/* <img src={main} alt="" className="img main-img" /> */}
      </div>
    </Wrapper>
  );
};

export default Landing;
