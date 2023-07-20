import "./style.css";

function Navbar() {
  return (
    <ul className="ul_navbar">
      <li className="li_navbar_title">
        <a className="a_navbar" href="#home">
          <span className="span_title">Shortly</span>
        </a>
      </li>
      <li className="li_navbar_next3">
        <a className="a_navbar" href="#features_grey_bg">
          <span className="span_next3">Features</span>
        </a>
      </li>
      <li className="li_navbar_next3">
        <a className="a_navbar" href="#contact">
          <span className="span_next3">Pricing</span>
        </a>
      </li>
      <li className="li_navbar_next3">
        <a className="a_navbar" href="#about">
          <span className="span_next3">Resources</span>
        </a>
      </li>

      <li className="li_navbar_signup">
        <button className="button_signup">Sign Up</button>
      </li>

      <li className="li_navbar_login">
        <a className="a_navbar" href="#login">
          <span className="span_next3">Login</span>
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
