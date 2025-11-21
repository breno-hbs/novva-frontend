import React from "react";

export default function ProfileCard({ pessoa, onOpen }) {
  return (
    <article
      className="
        bg-white dark:bg-[#1A1D23]
        border border-gray-200 dark:border-gray-700
        rounded-2xl shadow-sm p-6
        flex flex-col items-center text-center
        hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer
      "
      role="button"
      tabIndex={0}
      onClick={() => onOpen(pessoa)}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(pessoa); }}
    >
      <div className="relative w-32 h-32 -mt-14 mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-[#1A1D23] shadow-lg mx-auto">
          <img src={pessoa.foto} alt={pessoa.nome} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{pessoa.nome}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{pessoa.cargo}</p>

        <div className="flex items-center justify-center gap-2 mt-2">
          <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            {pessoa.localizacao}
          </p>

          {pessoa.area && (
            <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium border border-green-200 dark:border-green-800">
              {pessoa.area}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center items-center min-h-[60px]">
          {(pessoa.habilidadesTecnicas || []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="
                inline-flex items-center justify-center
                text-xs px-3 py-1.5 rounded-full
                border border-blue-200 dark:border-blue-800
                bg-blue-50 dark:bg-blue-900/30
                text-blue-700 dark:text-blue-300
                font-medium
                whitespace-nowrap
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
