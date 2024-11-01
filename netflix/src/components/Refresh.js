import "./Refresh.css";

const Refresh = (props) => {
  return (
    <>
      <button onClick={props.refresh} className="refresh-button">
        vrátit vše
      </button>
    </>
  );
};

export default Refresh;
