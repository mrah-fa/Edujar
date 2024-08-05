import "./CourseCard.css";
import { HiMiniPlay } from "react-icons/hi2";
export default function CourseCard({
  data: { color, lesson, title, description, icon, category },
}) {
  return (
    <div className="course-card">
      <div className="course-card-top">
        <div>
          <span className="play-icon" style={{ backgroundColor: color }}>
            <HiMiniPlay fontSize={13} color="#364C65" />
          </span>
          <p>{lesson}x Lesson</p>
        </div>
        <button>{category}</button>
      </div>
      <div className="course-card-mid">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="course-card-bottom">
        <button>Join</button>
        <img src={icon} alt="" />
      </div>
    </div>
  );
}
