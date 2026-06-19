import { ShieldCheck, Users, Award, Home, MapPin } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "15 Yıllık Tecrübe",
    text: "2009'dan beri güvenilir hizmet.",
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    text: "Alanında deneyimli kadro.",
  },
  {
    icon: Award,
    title: "Kaliteli İşçilik",
    text: "Özenli ve dayanıklı uygulamalar.",
  },
  {
    icon: Home,
    title: "Anahtar Teslim",
    text: "Planlamadan teslimata tek adres.",
  },
  {
    icon: MapPin,
    title: "İstanbul Geneli",
    text: "Tüm ilçelere hizmet.",
  },
];

export default function Features() {
  return (
    <section className="features">
      {features.map((item) => {
        const Icon = item.icon;

        return (
          <div className="feature-card" key={item.title}>
            <Icon size={34} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
