import "./MovieDelete.css";

const MovieDelete = (props) => {
  return (
    <>
      <button className="btm-delete" onClick={props.deleteMovie}>
        Vymazat film
      </button>
    </>
  );
};

export default MovieDelete;
