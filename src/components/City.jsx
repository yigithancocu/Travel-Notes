import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import { useEffect } from "react";

function City() {
  const navigate = useNavigate();
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <p>Loading...</p>;

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className="grid grid-cols pl-12 pt-4 rounded-lg bg-stone-400 w-96 h-96">
      <div>
        <h6 className="text-stone-600">City name</h6>
        <h3 className="font-semibold text-stone-800">{cityName}</h3>
      </div>

      <div>
        <h6 className="text-stone-600">You went to {cityName} on</h6>
        <p className="font-semibold text-stone-800">
          {formatDate(date || null)}
        </p>
      </div>

      {notes && (
        <div>
          <h6 className="text-stone-600">Your notes</h6>
          <p className="font-semibold text-stone-800"> {notes}</p>
        </div>
      )}

      <div>
        <h6 className="text-stone-600">Learn more</h6>
        <a
          className="font-semibold text-stone-800"
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <button
        className="font-semibold text-stone-800 pl-48"
        onClick={() => navigate(-1)}
      >
        back
      </button>
    </div>
  );
}

export default City;
