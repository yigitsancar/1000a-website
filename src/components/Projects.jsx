import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.jpeg";

const mainProjects = [
  {
    image: project2,
    title: "Mutfak Yenileme",
    text: "Eski mutfakları modern, kullanışlı ve estetik alanlara dönüştürüyoruz.",
  },
  {
    image: project3,
    title: "Banyo Yenileme",
    text: "Banyoları konforlu, şık ve fonksiyonel yaşam alanlarına dönüştürüyoruz.",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span>DÖNÜŞÜMLER</span>
        <h2>Önceki Hali, Sonraki Hali</h2>
      </div>

      <div className="main-projects">
        {mainProjects.map((project) => (
          <div className="main-project-card" key={project.title}>
            <img src={project.image} alt={project.title} />

            <div className="main-project-content">
              <span>ANAHTAR TESLİM DÖNÜŞÜM</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="detail-project">
        <img src={project1} alt="İç Mekan Detayı" />

        <div>
          <span>DETAYLI İŞÇİLİK</span>
          <h3>İç Mekan Detayları</h3>
          <p>
            Aydınlatma, kapı geçişleri ve ince işçilik detaylarıyla yaşam
            alanlarında bütünlük sağlıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
