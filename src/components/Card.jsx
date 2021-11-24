const Card = ({ data }) => {

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.strMeal}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{data.strCategory}</li>
            <li class="list-group-item">{data.strArea}</li>
          </ul>
          <a
            href={data.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            See youtube video
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
