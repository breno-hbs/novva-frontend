// import React from "react";

// export default function ProfileCard({ pessoa, onOpen }) {
//   return (
//     <article
//       className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
//       role="button"
//       tabIndex={0}
//       onClick={() => onOpen(pessoa)}
//       onKeyDown={(e) => { if (e.key === 'Enter') onOpen(pessoa); }}
//     >
//       <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white -mt-14 shadow-md">
//         <img src={pessoa.foto} alt={pessoa.nome} className="w-full h-full object-cover" />
//       </div>

//       <div className="mt-4">
//         <h3 className="font-semibold text-lg">{pessoa.nome}</h3>
//         <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{pessoa.cargo}</p>
//         <p className="text-xs text-gray-400 mt-2">{pessoa.localizacao}</p>

//         <div className="mt-3 flex flex-wrap gap-2 justify-center">
//           {(pessoa.habilidadesTecnicas || []).slice(0, 6).map((tag) => (
//             <span key={tag} className="text-xs px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-700">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </article>
//   );
// }

