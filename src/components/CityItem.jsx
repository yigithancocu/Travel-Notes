import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  console.log(city);
  const { deleteCity } = useCities();
  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  return (
    <div className="flex space-y-4 ">
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <div className=" bg-stone-400 rounded-lg  border-4 border-l-red-800 w-96 h-16 text-stone-800 mt-4">
          <div className="flex justify-between pt-2">
            <div>{cityName} </div>
            <div className="pl-24">{formatDate(date)} </div>
          </div>
        </div>
      </Link>
      <button
        onClick={handleDelete}
        className="mr-2 ml-2 rounded-lg w-8 bg-red-400 text-white"
      >
        X
      </button>
    </div>
  );
}

export default CityItem;
