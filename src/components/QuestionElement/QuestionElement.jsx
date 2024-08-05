import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./QuestionElement.css";

export default function QuestionElement({
  data: { question, answer },
  isOpen,
  onToggle,
}) {
  return (
    <div className="accordion-element">
      <div className="accordion-element-question" onClick={onToggle}>
        <h4>{question}</h4>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <div className={`accordion-element-answer ${isOpen ? "active" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
