import React from "react";

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="px-3 py-1 border rounded">
        Prev
      </button>
      <span>{page} / {totalPages}</span>
      <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="px-3 py-1 border rounded">
        Next
      </button>
    </div>
  );
}
