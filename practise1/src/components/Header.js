import userImg from "../../images/user_456212.png";

const Header = () => {
  const title = "Junk bazzar";
  return (
    <div id="header-container">
      <div className="nav-info">
        <a href={"/"}>
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/pizza-pizza-logo-png-transparent.png"
            alt="logo"
            id="logo"
          ></img>
        </a>
      </div>

      <h2>{title}</h2>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <a href={""}>Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
