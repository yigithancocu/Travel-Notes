import { useCities } from "../context/CitiesContext";
import CityItem from "./CityItem";
import Spinner from "./Spinner";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  return (
    <div className="overflow-y-auto mb-2">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;
