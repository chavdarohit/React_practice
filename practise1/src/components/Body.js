import { useState } from "react";
import { restaurants } from "../config";
import RestaurantCard from "./RestaurantCard";

const filterData = (searchTerm, restaurantList) => {
  return restaurantList.filter((rs) => rs.info.name.includes(searchTerm));
};

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantList, setRestaurantList] = useState(restaurants);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search-input"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTerm, restaurantList);
            setRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>

      <div id="body-container">
        {restaurantList.map((rs) => {
          return (
            <RestaurantCard
              name={rs.info.name}
              cuisines={rs.info.cuisine.map((c) => c.name)}
              avgRating={rs.info.rating.aggregate_rating}
              boxColor={
                rs.info.rating.aggregate_rating < 2
                  ? "red"
                  : rs.info.rating.aggregate_rating > 3.5
                  ? "green"
                  : "yellow"
              }
              img={rs.info.image.url}
              key={rs.info.resId}
            />
          );
        })}
      </div>
    </>
  );
};
export default Body;
