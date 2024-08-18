import PropTypes from 'prop-types';

const Footer = ({Imagepath1,title1,pargraph1,Imagepath2,
                 title2,email1,email2,Imagepath3,title3,
                 telephone,Imagepath4,title4,Date1,Date2,
                 Createdby,Creatorname,Rights
                }) => {
  return (
    
    <section className="footer">

        <div className="box-container">

            <div className="box">
                <img src={Imagepath1} alt=""/>
                <h3>{title1}</h3>
                <p>{pargraph1}</p>
    
            </div>
    
            <div className="box">
                <img src={Imagepath2} alt=""/>
                <h3>{title2}</h3>
                <a href="#" className="link">{email1}</a>
                <a href="#" className="link">{email2}</a>
            </div>
    
            <div className="box">
                <img src={Imagepath3} alt=""/>
                <h3>{title3}</h3>
                <p>{telephone}</p>
            </div>
    
            <div className="box">
                <img src={Imagepath4} alt=""/>
                <h3>{title4}</h3> 
                <p>{Date1}
             <br/> {Date2} </p> 
            </div>

        </div>

        <div className="credit">{Createdby} <span>{Creatorname}</span> {Rights} </div>


    </section>


  )
}

// Declare PropTypes
Footer.propTypes = {
    Imagepath1: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    pargraph1: PropTypes.string.isRequired,
    Imagepath2: PropTypes.string.isRequired,
    title2 : PropTypes.string.isRequired,
    email1 : PropTypes.string.isRequired,
    email2 : PropTypes.string.isRequired,
    Imagepath3 : PropTypes.string.isRequired,
    title3 : PropTypes.string.isRequired,
    telephone : PropTypes.string.isRequired, 
    Imagepath4 : PropTypes.string.isRequired,
    title4 : PropTypes.string.isRequired, 
    Date1 : PropTypes.string.isRequired,
    Date2 : PropTypes.string.isRequired,
    Createdby: PropTypes.string.isRequired,
    Creatorname: PropTypes.string.isRequired,
    Rights : PropTypes.string.isRequired,
};

export default Footer