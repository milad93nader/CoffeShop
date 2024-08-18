
import PropTypes from 'prop-types';

const Aboutus = (props) => {
  const { title, description, imagePath,content} = props; // Destructure props to get title, description, and optionally imagePath

  return (
    <>
    <h1 className="heading">{title}</h1>
    
    <section className="about" id="about">

        <div className="row">

            <div className="image">
                <img src={imagePath} alt="about"/>
            </div>

            <div className="content">
                <h3>{description}</h3>
                <div className="line"></div>
                <p>{content}</p>
            </div>

        </div>

    </section>
    </>
  );
};

// Declare PropTypes
Aboutus.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Aboutus