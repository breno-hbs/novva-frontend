// import React from "react";

// export default function Filters({ areas = [], cities = [], techs = [], area, setArea, city, setCity, tech, setTech }) {
//   return (
//     <div className="flex gap-3 flex-wrap justify-center">
//       <select value={area} onChange={(e) => setArea(e.target.value)} className="rounded-full border px-4 py-2">
//         <option value="">Todas as áreas</option>
//         {areas.map(a => <option key={a} value={a}>{a}</option>)}
//       </select>

//       <select value={city} onChange={(e) => setCity(e.target.value)} className="rounded-full border px-4 py-2">
//         <option value="">Todas as cidades</option>
//         {cities.map(c => <option key={c} value={c}>{c}</option>)}
//       </select>

//       <select value={tech} onChange={(e) => setTech(e.target.value)} className="rounded-full border px-4 py-2">
//         <option value="">Todas as tecnologias</option>
//         {techs.map(t => <option key={t} value={t}>{t}</option>)}
//       </select>

//       <button onClick={() => { setArea(''); setCity(''); setTech(''); }} className="px-4 py-2 rounded-full border">
//         Resetar filtros
//       </button>
//     </div>
//   );
// }

