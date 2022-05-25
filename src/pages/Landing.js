import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            You probably haven't heard of them commodo tumblr four dollar toast
            lumbersexual fashion axe tilde seitan vegan wolf bicycle rights
            mumblecore dolor consequat umami. Austin biodiesel tote bag cornhole
            poutine, blue bottle marfa swag copper mug four loko cupidatat ut
            live-edge ramps magna.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="stand with urkaine" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
