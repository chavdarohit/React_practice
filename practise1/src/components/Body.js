import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (searchTerm, restaurantList) => {
  return restaurantList.filter((rs) =>
    rs?.info?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);

  useEffect(() => {
    console.log("use effect rendered");
    getRestaurantsFromApi();
  }, []);

  const getRestaurantsFromApi = async () => {
    console.log("Api called");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("data", data);
    const json = await data.json();

    console.log(
      "data.json ",
      json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  console.log("component rendered...", restaurantList.length);

  if (restaurantList)
    return restaurantList.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="container">
        {console.log("return called")}
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
              setfilteredRestaurantList(data);
            }}
          >
            Search
          </button>
        </div>

        <div id="body-container">
          {filteredRestaurantList?.length === 0 ? (
            <h1>No restaurants found</h1>
          ) : (
            filteredRestaurantList.map((rs) => {
              return (
                <RestaurantCard
                  name={rs.info.name}
                  cuisines={rs.info.cuisines}
                  avgRating={rs.info.avgRating}
                  boxColor={
                    rs.info.avgRating < 2
                      ? "red"
                      : rs.info.avgRating > 3.5
                      ? "green"
                      : "yellow"
                  }
                  img={rs.info.cloudinaryImageId}
                  key={rs.info.id}
                />
              );
            })
          )}
        </div>
      </div>
    );
};
export default Body;
