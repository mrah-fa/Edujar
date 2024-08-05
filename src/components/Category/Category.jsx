import './Category.css'
export default function Category({icon , title}) {
  return (
    <div className="category">
      <img src={icon} alt="" />
      <h4>{title}</h4>
    </div>
  );
}
