import monkLogo from "/assets/monk.svg";

function Header() {
  return (
    <header className="header">
      <img src={monkLogo} className="brand-logo" alt="Coder Monk logo" />
      <h1>Coder Monk</h1>
    </header>
  );
}

export default Header;
