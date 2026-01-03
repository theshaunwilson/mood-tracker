import PropTypes from 'prop-types';

function Card({ children, title }) {
  return (
    <div className="text-2xl font-bold mt-2 mb-2 text-gray-800">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Card;
