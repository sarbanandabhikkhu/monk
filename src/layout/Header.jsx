import monkLogo from "/assets/monk.svg";

function Header() {
  return (
    <header className="header">
      <img src={monkLogo} className="brand-logo" alt="Monk logo" />
      <h1>Monk</h1>
    </header>
  );
}

export default Header;
