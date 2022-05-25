import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
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
          <button className="btn btn-hero">Login / Register</button>
        </div>
        <img src={main} alt="stand with urkaine" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
