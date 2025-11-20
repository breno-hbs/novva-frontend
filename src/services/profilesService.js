import profiles from "../data/profiles.json";

export function getAllProfiles() {
  return profiles;
}

export function getProfileById(id) {
  return profiles.find(p => String(p.id) === String(id)) || null;
}

// search helpers (case-insensitive)
export function searchProfiles({ query = "", area = "", city = "", tech = "" }) {
  const q = String(query || "").trim().toLowerCase();
  return profiles.filter((p) => {
    const matchQuery =
      !q ||
      (p.nome && p.nome.toLowerCase().includes(q)) ||
      (p.cargo && p.cargo.toLowerCase().includes(q)) ||
      (p.habilidadesTecnicas && p.habilidadesTecnicas.some(h => h.toLowerCase().includes(q)));

    const matchArea = !area || (p.area === area);
    const matchCity = !city || (p.localizacao && p.localizacao.toLowerCase().includes(String(city).toLowerCase()));
    const matchTech = !tech || (p.habilidadesTecnicas && p.habilidadesTecnicas.some(t => t.toLowerCase() === String(tech).toLowerCase()));

    return matchQuery && matchArea && matchCity && matchTech;
  });
}