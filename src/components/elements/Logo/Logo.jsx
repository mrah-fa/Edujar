import "./Logo.css";
export default function Logo({ name }) {
  return (
    <>
      <h2 className="logo" dangerouslySetInnerHTML={{ __html: name }} />
    </>
  );
}
