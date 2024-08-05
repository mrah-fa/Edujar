import "./StatisticsCard.css";
import { GoStarFill } from "react-icons/go";
export default function StatisticsCard({
  number,
  title,
  logo,
  description,
  rate,
}) {
  return (
    <>
      <div className="StatisticsCard">
        <h3>{number}</h3>
        <p>{title}</p>
        {logo && (
          <>
            <img src={logo} alt="" />
            <div className="custom-statistic">
              <p>{description}</p>
              <div className="rate">
                <span>{rate}</span>
                <GoStarFill color="#FBB03B" fontSize={30} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
