import profiles from "../data/profiles.json";

import img1 from "../assets/profiles/img1.jpg";
import img2 from "../assets/profiles/img2.jpg";
import img5 from "../assets/profiles/img5.jpg";

const fotos = [img1, img2, img5];

export function getAllProfiles() {
  return profiles.map((p, i) => ({
    ...p,
    foto: fotos[i % fotos.length]  
  }));
}

export function getProfileById(id) {
  return getAllProfiles().find(p => String(p.id) === String(id)) || null;
}

export function searchProfiles({ query = "", area = "", city = "", tech = "" }) {
  const q = String(query || "").trim().toLowerCase();
  const all = getAllProfiles();

  return all.filter((p) => {
    const matchQuery =
      !q ||
      (p.nome && p.nome.toLowerCase().includes(q)) ||
      (p.cargo && p.cargo.toLowerCase().includes(q)) ||
      (p.habilidadesTecnicas &&
        p.habilidadesTecnicas.some((h) =>
          h.toLowerCase().includes(q)
        ));

    const matchArea = !area || p.area === area;

    const matchCity =
      !city ||
      (p.localizacao &&
        p.localizacao.toLowerCase().includes(String(city).toLowerCase()));

    const matchTech =
      !tech ||
      (p.habilidadesTecnicas &&
        p.habilidadesTecnicas.some(
          (t) => t.toLowerCase() === String(tech).toLowerCase()
        ));

    return matchQuery && matchArea && matchCity && matchTech;
  });
}
