import "./Statistics.css";
import StatisticsCard from "../StatisticsCard/StatisticsCard";
import { StatisticsData } from "./../../data";
export default function Statistics() {
  return (
    <section className="Statistics section-mt">
        {StatisticsData.map((el, index) => {
          return (
            <StatisticsCard
              key={index}
              number={el.number}
              title={el.title}
              rate={el.rate}
              description={el.description}
              logo={el.logo}
            />
          );
        })}
    </section>
  );
}
