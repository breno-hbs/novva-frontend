import profiles from "../data/profiles.json";

export default function Filters({ setFilteredArea }) {
  const options = [
    "Desenvolvimento",
    "Dados",
    "UX/UI",
    "DevOps",
    "Cybersegurança",
    "IA"
  ];

  return (
    <select
      className="border px-3 py-2 rounded"
      onChange={(e) => setFilteredArea(e.target.value)}
    >
      <option value="">Todas as áreas</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
