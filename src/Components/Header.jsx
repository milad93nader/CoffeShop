import PropTypes from 'prop-types';
import { useState } from "react";

const Header = ({title,logo,link1,link2,link3,link4}) => {
      // State to manage navbar visibility
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  return (
    <>
    <div>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>{title}</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
</div>

    <div className="header">
    <a href="#" className="logo"> <i className="fas fa-coffee"></i>{logo}</a>

    <nav className={`navbar ${isNavbarVisible ? 'active' : ''}`}>
        <div id="close-navbar" onClick={() => setIsNavbarVisible(false)} className="fas fa-times"></div>
        <a href="#">{link1}</a>
        <a href="#about">{link2}</a>
        <a href="#menu">{link3}</a>
        <a href="#contact">{link4}</a>
    </nav>

    <div className="icons">
    <div id="menu-btn"  className="fas fa-bars" onClick={() => setIsNavbarVisible(true)} ></div>
    </div>

</div>
</>
  )
}

Header.propTypes =
{
  title:PropTypes.string.isRequired,
  logo:PropTypes.string.isRequired,
  link1:PropTypes.string.isRequired,
  link2:PropTypes.string.isRequired,
  link3:PropTypes.string.isRequired,
  link4:PropTypes.string.isRequired,

}

export default Header