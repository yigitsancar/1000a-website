import logo from "../assets/logo.png";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <span>HAKKIMIZDA</span>

        <h2>15 Yıllık Tecrübeyle İstanbul Genelinde Hizmet</h2>

        <p>
          1000A olarak 15 yılı aşkın süredir tadilat, renovasyon, inşaat ve
          gayrimenkul danışmanlığı alanlarında hizmet veriyoruz. Gaziosmanpaşa
          merkezli işletmemizle İstanbul genelinde anahtar teslim çözümler
          sunuyoruz.
        </p>

        <p>
          Mutfak yenilemeden banyo tadilatına, komple daire renovasyonundan
          dekorasyon uygulamalarına kadar her projede kaliteli işçilik,
          güvenilir hizmet ve zamanında teslimat anlayışıyla çalışıyoruz.
        </p>
      </div>
      
      <div className="about-card">
	  <img src={logo} alt="1000A Logo" className="about-logo" />
      </div>

    </section>
  );
}
