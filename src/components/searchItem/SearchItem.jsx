import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m do centro da cidade de {item.city}</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Cancele Gratuitamente</span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span></span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">A partir de: {item.cheapestPrice}€</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Ver disponibilidade</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
