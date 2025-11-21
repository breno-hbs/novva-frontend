import profiles from "../data/profiles.json";

import img1 from "../assets/profiles/img1.jpg";
import img2 from "../assets/profiles/img2.jpg";
import img3 from "../assets/profiles/img3.jpg";
import img5 from "../assets/profiles/img5.jpg";

// Mapeamento específico de fotos por nome (CORRIGIDO)
// img2 = ÚNICA FEMININA
// img1, img3, img5 = MASCULINAS
const fotosPorNome = {
  'Ana Silva': img2,
  'Marina Costa': img2,
  'Juliana Oliveira': img2,
  'Camila Rodrigues': img2,
  'Carlos Mendes': img1,
  'Pedro Santos': img3,
  'Rafael Lima': img5,
  'Lucas Ferreira': img1
};

function getFoto(nome) {
  return fotosPorNome[nome] || img1;
}

export function getAllProfiles() {
  return profiles.map((p) => ({
    ...p,
    foto: getFoto(p.nome)
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

    // Corrigido: comparação case-insensitive e com trim
    const matchArea = !area || (p.area && p.area.trim().toLowerCase() === area.trim().toLowerCase());

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
