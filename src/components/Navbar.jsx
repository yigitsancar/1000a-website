import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <img src={logo} alt="1000A Logo" />
      </a>

      <nav className="nav-links">
        <a href="#home">Ana Sayfa</a>
        <a href="#services">Hizmetler</a>
        <a href="#about">Hakkımızda</a>
        <a href="#projects">Projeler</a>
        <a href="#contact">İletişim</a>
      </nav>

      <a className="nav-cta" href="tel:+902126188616">
        Hemen Ara
      </a>
    </header>
  );
}
