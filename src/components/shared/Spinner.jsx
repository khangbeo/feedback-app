import spinner from "../assets/spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="loading..."
        style={{
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      />
    </div>
  );
}
