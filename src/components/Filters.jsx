import React from "react";
import { ChevronDown } from "lucide-react";

export default function Filters({
  areas,
  cities,
  techs,
  area,
  setArea,
  city,
  setCity,
  tech,
  setTech,
}) {
  function resetFilters() {
    setArea("");
    setCity("");
    setTech("");
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">

    
      <div className="relative">
        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="
            appearance-none w-44 h-10 px-4
            bg-white border border-gray-200 rounded-lg
            text-sm text-gray-700
            focus:ring-2 focus:ring-green-500/40 focus:border-green-600
            transition
          "
        >
          <option value="">Todas as áreas</option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
      </div>

   
      <div className="relative">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="
            appearance-none w-44 h-10 px-4
            bg-white border border-gray-200 rounded-lg
            text-sm text-gray-700
            focus:ring-2 focus:ring-green-500/40 focus:border-green-600
            transition
          "
        >
          <option value="">Todas as cidades</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
      </div>

   
      <div className="relative">
        <select
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          className="
            appearance-none w-44 h-10 px-4
            bg-white border border-gray-200 rounded-lg
            text-sm text-gray-700
            focus:ring-2 focus:ring-green-500/40 focus:border-green-600
            transition
          "
        >
          <option value="">Todas as tecnologias</option>
          {techs.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
      </div>

      {/* RESETAR FILTROS */}
      <button
        onClick={resetFilters}
        className="
          px-4 h-10
          bg-gray-100 text-gray-600
          rounded-lg text-sm
          hover:bg-gray-200 transition
        "
      >
        Resetar filtros
      </button>
    </div>
  );
}