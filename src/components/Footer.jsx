import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img className="footer-logo" src={logo} alt="1000A Logo" />
      </div>

      <div className="footer-info">
        <p>Hacı Salih Efendi Caddesi No:31/A Gaziosmanpaşa / İstanbul</p>
        <p>0212 618 86 16 • 0532 771 01 12</p>
      </div>

	<div>
	  <p>© 2026 1000A. Tüm hakları saklıdır.</p>
	  <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
	    Designed & Developed by Yiğit Sancar
	  </p>
	</div>

    </footer>
  );
}
