import profiles from "../data/profiles.json";
import ProfileCard from "../components/ProfileCard";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArea, setFilteredArea] = useState("");

  const filteredProfiles = profiles.filter((p) => {
    const matchesSearch =
      p.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.cargo.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesArea = filteredArea ? p.area === filteredArea : true;

    return matchesSearch && matchesArea;
  });

  return (
    <div className="p-4">
      <SearchBar setSearchQuery={setSearchQuery} />
      <Filters setFilteredArea={setFilteredArea} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {filteredProfiles.map((pessoa) => (
          <ProfileCard key={pessoa.id} pessoa={pessoa} />
        ))}
      </div>
    </div>
  );
}

