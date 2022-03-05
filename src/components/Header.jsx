// PropTypes are type checking for props
// if you use typescript, you don't need to use it
// rarely used anyways, but it's there if you need
// type checking
import PropTypes from "prop-types";

export default function Header({ textColor, bgColor, text }) {
  const headerStyle = { backgroundColor: bgColor, color: textColor };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// sets a default prop if no props are passed to the component
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

// type checking for string
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
