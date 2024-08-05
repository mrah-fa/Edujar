import "./Reviews.css";
import icon from "./../../assets/images/qutation.svg";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { users } from "./../../data";
import img3 from "./../../assets/images/img3.png";
export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <img src={img3} alt="" className="avatar" />
        <div className="review-user-info">
          <h2>What our client’s say</h2>
          <img src={icon} alt="" />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim.
          </p>
          <h4>Adrian Smith</h4>
        </div>
        <div className="reviews-slider">
          <IoArrowBackSharp fontSize={24} />
          {users.map((el, index) => {
            return <img key={index} src={el} alt="user-img" />;
          })}
          <IoArrowForwardSharp fontSize={24} />
        </div>
      </div>
    </section>
  );
}
