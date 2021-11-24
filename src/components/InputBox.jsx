
const InputBox = (props) => {
  const { value, handleValue, search } = props;

  return (
    <>
      <div className="input-group mb-3" style={{ width: "500px", margin: "auto" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Reciepe"
          value={value}
          onChange={handleValue}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => search(value)}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default InputBox;
