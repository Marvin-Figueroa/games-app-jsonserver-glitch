const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a className="main-nav__link" href="google.com">
            Hello
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="google.com">
            World
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="google.com">
            React
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
