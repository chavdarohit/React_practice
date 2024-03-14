import toast, { Toaster } from "react-hot-toast";

const RestaurantCard = ({ name, cuisines, avgRating, img, boxColor }) => {
  const notify = () =>
    toast.success(`Order succesfully placed in ${name}.`, {
      style: {
        backgroundColor: "green",
        color: "white",
      },
      icon: "👏",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
      duration: 2000,
      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  return (
    <div className="card">
      {/* <img src={img} alt="img"></img> */}
      <h2>{name}</h2>
      <p>{cuisines && cuisines.join(", ")}</p>
      <p
        style={{
          backgroundColor: boxColor,
        }}
        id="ratings"
      >
        {avgRating}
      </p>
      <button
        onClick={notify}
        id="ordernow-btn"
        className="btn btn-outline-danger"
      >
        Order Now
      </button>
      <Toaster />
    </div>
  );
};
export default RestaurantCard;
