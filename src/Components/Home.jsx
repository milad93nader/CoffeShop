import PropTypes from 'prop-types';

const Home = ({title, buttonText}) => {

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>{title}</h3> {/* Use the title prop */}
        <a href="#" className="btn">{buttonText}</a> {/* Use the buttonText prop */}
      </div>
    </section>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText : PropTypes.string.isRequired,
};
export default Home;
