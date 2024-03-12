import userImg from "../../images/user_456212.png";

const Header = () => {
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
        <h2>Junk bazzar</h2>
      </div>
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
