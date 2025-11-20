import profiles from "../data/profiles.json";

export default function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome, cargo..."
      className="border px-3 py-2 rounded w-full"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
