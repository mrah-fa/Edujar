import Logo from '../elements/Logo/Logo'
import MainButton from '../elements/MainButton/MainButton';
import './Footer.css'
export default function Footer() {
  return (
    <footer className="section-mt">
      <div className="container">
        <div className="col">
          <Logo name="Edu<span>jar</span>" />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...
          </p>
          <h4>
            © 2024 <span> edujar </span> - All Rights Reserved
          </h4>
        </div>
        <div className="col">
          <h3>Quick links</h3>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>About us</li>
            <li>Works</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col">
          <h3>Legal</h3>
          <ul>
            <li>Terms of use</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div className="col">
          <h3>Quick links</h3>
          <input type="email" placeholder="Enter Email" />
          <div className='subscribe-btn'>
            <MainButton title="Subscribe" />
          </div>
        </div>
      </div>
    </footer>
  );
}
