import React, { useMemo, useState, useEffect } from "react";
import { getAllProfiles, searchProfiles } from "../services/profilesService";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProfileModal from "../components/ProfileModal";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [tech, setTech] = useState("");
  const [page, setPage] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const perPage = 12;

  const allProfiles = useMemo(() => getAllProfiles(), []);

  const areas = useMemo(
    () => Array.from(new Set(allProfiles.map((p) => p.area).filter(Boolean))),
    [allProfiles]
  );

  const cities = useMemo(
    () => Array.from(new Set(allProfiles.map((p) => p.localizacao).filter(Boolean))),
    [allProfiles]
  );

  const techs = useMemo(
    () =>
      Array.from(
        new Set(allProfiles.flatMap((p) => p.habilidadesTecnicas || []))
      ).slice(0, 50),
    [allProfiles]
  );

  const filtered = useMemo(() => {
    return searchProfiles({ query, area, city, tech });
  }, [query, area, city, tech]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  function openProfile(p) {
    setSelectedProfile(p);
    setOpenModal(true);
  }

  function closeProfile() {
    setOpenModal(false);
    setSelectedProfile(null);
  }

  useEffect(() => setPage(1), [query, area, city, tech]);

  return (
    <>
      <main className="min-h-screen bg-[#F7F9FB] pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-semibold text-[#005C31]">
            Encontre os melhores profissionais
          </h1>

          <p className="mt-3 text-base text-gray-600">
            Conecte-se com talentos de tecnologia, design, marketing e gestão em todo o Brasil
          </p>

          <div className="mt-10">
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          <div className="mt-10">
            <Filters
              areas={areas}
              cities={cities}
              techs={techs}
              area={area}
              setArea={setArea}
              city={city}
              setCity={setCity}
              tech={tech}
              setTech={setTech}
            />
          </div>

          <div className="mt-10 text-gray-500 text-sm">
            <div>{filtered.length} profissionais</div>
            <div className="text-xs text-gray-400">encontrados</div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-24 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {pageItems.map((p) => (
              <ProfileCard key={p.id} pessoa={p} onOpen={openProfile} />
            ))}
          </div>

          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </section>

        <ProfileModal open={openModal} onClose={closeProfile} profile={selectedProfile} />
      </main>
    </>
  );
}
