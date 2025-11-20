import profiles from "../data/profiles.json";
import React from "react";


export default function SearchBar({ query, setQuery }) {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar profissionais por nome, cargo ou habilidade..."
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <div className="absolute left-3 top-3 text-gray-400">🔍</div>
      </div>
    </div>
  );
}
