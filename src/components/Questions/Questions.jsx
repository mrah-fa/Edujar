import MainButton from "../elements/MainButton/MainButton";
import "./Questions.css";
import { questions } from "./../../data";
import QuestionElement from "../QuestionElement/QuestionElement";
import { useState } from "react";
export default function Questions() {
  const [openQuestionId, setOpenQuestionId] = useState(null);
  return (
    <section className="section-mt questions">
      <div className="container">
        <div className="questions-section-title">
          <p>Frequently Asked Questions</p>
          <h2>Any Questions? Find here.</h2>
          <MainButton title={"Send Message"} />
        </div>
        <div className="questions-accordion">
          {questions?.map((el) => {
            return (
              <QuestionElement
                key={el.id}
                data={el}
                isOpen={openQuestionId === el.id}
                onToggle={() =>
                  setOpenQuestionId(openQuestionId === el.id ? null : el.id)
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
