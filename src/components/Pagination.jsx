import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, setPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-3 mt-10">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="
          w-9 h-9 flex items-center justify-center
          rounded-md border border-gray-300 bg-white
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:border-green-600 transition
        "
      >
        <ChevronLeft size={18} strokeWidth={2} className="text-gray-600" />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`
              w-9 h-9 flex items-center justify-center rounded-md text-sm border transition
              ${
                page === num
                  ? "bg-green-600 text-white border-green-600 shadow-sm"
                  : "bg-white border-gray-300 text-gray-700 hover:border-green-600"
              }
            `}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="
          w-9 h-9 flex items-center justify-center
          rounded-md border border-gray-300 bg-white
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:border-green-600 transition
        "
      >
        <ChevronRight size={18} strokeWidth={2} className="text-gray-600" />
      </button>

    </div>
  );
}
