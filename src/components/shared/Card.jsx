import PropTypes from "prop-types";

export default function Card({ children, reverse }) {
  // conditional card styling
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  // conditional class styling
  // return (
  //     <div className="card" style={{
  //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //         color: reverse ? '#fff' : '#000',
  //     }}>
  //         {children}
  //     </div>
  // )
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}