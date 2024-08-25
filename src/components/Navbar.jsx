const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <h1 className="logo">
          <a href="#">Learn With Rohan</a>
        </h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
