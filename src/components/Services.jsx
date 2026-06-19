import {
  Home,
  Bath,
  ChefHat,
  Paintbrush,
  Building2,
  Handshake
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Komple Ev Tadilatı",
  },
  {
    icon: ChefHat,
    title: "Mutfak Yenileme",
  },
  {
    icon: Bath,
    title: "Banyo Yenileme",
  },
  {
    icon: Paintbrush,
    title: "Boya & Dekorasyon",
  },
  {
    icon: Building2,
    title: "İnşaat Hizmetleri",
  },
  {
    icon: Handshake,
    title: "Gayrimenkul Danışmanlığı",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <span>HİZMETLERİMİZ</span>
        <h2>İhtiyacınıza Uygun Çözümler</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={service.title}>
              <Icon size={40} />
              <h3>{service.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
