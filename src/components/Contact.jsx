export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <span>İLETİŞİM</span>

        <h2>Ücretsiz Keşif ve Fiyat Teklifi Alın</h2>

        <p>
          Tadilat, renovasyon, inşaat ve gayrimenkul danışmanlığı
          hizmetlerimiz hakkında bilgi almak için bize ulaşabilirsiniz.
        </p>

        <div className="contact-items">
          <div className="contact-item">
            <h4>Telefon</h4>
            <a href="tel:+902126188616">0212 618 86 16</a>
          </div>

          <div className="contact-item">
            <h4>Mobil</h4>
            <a href="tel:+905327710112">0532 771 01 12</a>
          </div>

          <div className="contact-item">
            <h4>Adres</h4>
            <p>
              Hacı Salih Efendi Caddesi No:31/A
              <br />
              Gaziosmanpaşa / İstanbul
            </p>
          </div>

          <div className="contact-item">
            <h4>Hizmet Bölgesi</h4>
            <p>İstanbul Geneli</p>
          </div>
        </div>
      </div>

      <div className="contact-card">
        <h3>Hemen İletişime Geçin</h3>

        <a
          className="contact-btn whatsapp"
          href="https://wa.me/905327710112"
          target="_blank"
        >
          WhatsApp'tan Yaz
        </a>

        <a
          className="contact-btn phone"
          href="tel:+902126188616"
        >
          Telefonla Ara
        </a>
      </div>
    </section>
  );
}
