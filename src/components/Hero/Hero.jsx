import "./Hero.css";
import line from "./../../assets/images/line.svg";
import img1 from "./../../assets/images/hero-img1.png";
import img2 from "./../../assets/images/hero-img2.png";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <img src={img1} alt="" className="img-person" />
          <div className="hero-content blur">
            <h1 className="blur">
              Learn with us anywhere with the best{" "}
              <span>
                experts
                <img src={line} alt="" className="line" />
              </span>
            </h1>
            <p>We collaborate with 275+ leading universities and companies</p>
            <div className="feild">
              <input type="text" placeholder="Want do you want to learn?" />
              <button>Explore</button>
            </div>
          </div>
          <img src={img2} alt="" />
        </div>
      </section>
    </>
  );
}
