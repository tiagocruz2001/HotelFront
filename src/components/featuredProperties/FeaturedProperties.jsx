import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <Link to={`/hotels/${item._id}`}>
              <span className="fpName">{item.name}</span>
          </Link>

              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">A partir de {item.cheapestPrice} €</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Estrelas</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
