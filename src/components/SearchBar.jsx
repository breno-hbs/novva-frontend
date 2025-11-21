import profiles from "../data/profiles.json";
import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

        <input
          type="text"
          placeholder="Buscar profissionais por nome, cargo ou habilidade..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full h-12 pl-12 pr-4
            bg-white rounded-xl shadow-sm
            border border-gray-200
            text-sm
            placeholder-gray-400
            focus:ring-2 focus:ring-green-600/40 focus:border-green-600
            transition
          "
        />
      </div>
    </div>
  );
}