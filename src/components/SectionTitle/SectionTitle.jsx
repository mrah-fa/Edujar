import "./SectionTitle.css";
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title section-mt">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
