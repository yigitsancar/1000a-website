export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-label">15 YILLIK TECRÜBE</p>

        <h1>
          Yaşam Alanlarınızı <br />
          Yeniden Tasarlıyoruz
        </h1>

        <p className="hero-text">
          İstanbul genelinde mutfak, banyo, daire yenileme ve anahtar teslim
          tadilat projelerinde kaliteli işçilik sunuyoruz.
        </p>

        <div className="hero-buttons">
          <a href="tel:+902126188616" className="btn btn-primary">
            Hemen Ara
          </a>

          <a
            href="https://wa.me/905327710112"
            target="_blank"
            className="btn btn-secondary"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
