import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUrlPosition from "../hooks/useUrlPosition";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../context/CitiesContext";
function Form() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState();
  const [country, setCountry] = useState();
  const [notes, setNotes] = useState();
  const [lat, lng] = useUrlPosition();
  const [date, setDate] = useState(new Date());
  const { createCity } = useCities();
  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  useEffect(
    function () {
      async function fetchCityData() {
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log(data);
        setCityName(data.city || data.locality);
        setCountry(data.countryName);
      }
      fetchCityData();
    },
    [lat, lng]
  );
  function handleSubmit(e) {
    e.preventDefault();
    const newCity = {
      cityName,
      country,
      notes,
      date,
      position: { lat, lng },
    };
    createCity(newCity);
    navigate("/app/cities");
  }
  return (
    <form className="bg-red-400 h-96 w-96 rounded-lg" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-8 mt-4 ml-6 mr-6">
        <div className=" flex flex-col space-y-4 ">
          <label>City Name</label>
          <div className="rounded-lg text-stone-900" type="text">
            {cityName}
          </div>
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="date">When did you go to {cityName} ? </label>
          <DatePicker
            className="text-stone-900"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className=" flex flex-col space-y-4">
          <label>Notes about trip</label>
          <textarea
            className="h-36 rounded-lg text-stone-900"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="flex justify-around  ">
          <button className="bg-stone-700 w-24 rounded-lg">add</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="bg-stone-700 w-24 rounded-lg"
          >
            back
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
