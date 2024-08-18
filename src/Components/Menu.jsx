
import PropTypes from 'prop-types';
const Menu = ({ title,items }) => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">{title}</h1>
      <div className="box-container">
        {items.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="price">${item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Declare PropTypes
Menu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Menu;
