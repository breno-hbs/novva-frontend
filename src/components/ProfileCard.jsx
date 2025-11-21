import React from "react";

export default function ProfileCard({ pessoa, onOpen }) {
  return (
    <article
  className="
    bg-white dark:bg-[#1A1D23]
    border border-gray-200 dark:border-gray-700
    rounded-xl shadow-sm p-6
    flex flex-col items-center text-center
    hover:shadow-md transition cursor-pointer
  "
  role="button"
  tabIndex={0}
  onClick={() => onOpen(pessoa)}
  onKeyDown={(e) => { if (e.key === 'Enter') onOpen(pessoa); }}
>
  <div className="relative w-28 h-28 -mt-14">
    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-[#1A1D23] shadow-md mx-auto">
      <img src={pessoa.foto} alt={pessoa.nome} className="w-full h-full object-cover" />
    </div>
  </div>

  <div className="mt-4">
    <h3 className="font-semibold text-base text-gray-800 dark:text-gray-100">{pessoa.nome}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{pessoa.cargo}</p>
    <p className="text-xs text-gray-400 mt-2">{pessoa.localizacao}</p>

    <div className="mt-3 flex flex-wrap gap-2 justify-center">
      {(pessoa.habilidadesTecnicas || []).slice(0, 6).map((tag) => (
        <span
          key={tag}
          className="
            text-xs px-3 py-1 rounded-full
            border border-blue-200 dark:border-blue-900
            bg-blue-50 dark:bg-blue-900/20
            text-blue-700 dark:text-blue-300
          "
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</article>

  );
}
