import './styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__toggle" id="mobile-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="navbar__logo">
        <h1>TreeFund</h1>
      </div>
    </header>
  );
};

export default Navbar;

