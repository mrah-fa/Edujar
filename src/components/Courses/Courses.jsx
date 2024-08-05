import SectionTitle from "../SectionTitle/SectionTitle";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./Courses.css";
import { courses } from "./../../data";
import CourseCard from "../CourseCard/CourseCard";
import MainButton from "../elements/MainButton/MainButton";
import { Link } from "react-router-dom";
export default function Courses() {
  return (
    <section className="courses">
      <div className="container">
        <div className="section-header">
          <SectionTitle
            title="Popular Courses"
            subtitle="Let’s join our best classes with our famous  instructor and institutes"
          />
          <div className="arrows">
            <span>
              <MdArrowBackIosNew fontSize={16} />
            </span>
            <span>
              <MdArrowForwardIos fontSize={16} />
            </span>
          </div>
        </div>
        <div className="courses-cards">
          {courses.map((el) => {
            return <CourseCard key={el.id} data={el} />;
          })}
        </div>
        <Link to="/courses">
          <MainButton title={"Explore Courses"} />
        </Link>
      </div>
    </section>
  );
}
