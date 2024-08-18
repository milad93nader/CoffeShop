import PropTypes from 'prop-types';
const Contact = ({title1,image,title2}) => {
  return (
     <div>
    <section className="contact" id="contact">

        <h1 className="heading">{title1}</h1>

        <div className="row">

            <div className="image">
                <img src={image} alt=""/>
            </div>

            <form action="">
                <h3>{title2}</h3>

                <div className="inputBox">
                    <span className="fas fa-user"></span>
                    <input type="text" placeholder="name"/>
                </div>

                <div className="inputBox">
                    <span className="fas fa-envelope"></span>
                    <input type="email" placeholder="email"/>
                </div>

                <div className="inputBox">
                    <span className="fas fa-phone"></span>
                    <input type="number" placeholder="phone"/>
                </div>

                <input type="submit" value="send message" className="btn"/>

            </form>

        </div>

    </section>
    </div>
  );
};

// Declare PropTypes
Contact.propTypes = {
    title1: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
  };

export default Contact