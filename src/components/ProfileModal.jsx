import React, { useEffect } from "react";

export default function ProfileModal({ open, onClose, profile }) {
    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open || !profile) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/40" onClick={onClose} />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full z-10 p-6 overflow-auto">
                <button className="float-right" onClick={onClose}>Fechar</button>
                <div className="flex gap-6">
                    <img src={profile.foto} alt={profile.nome} className="w-32 h-32 rounded-full object-cover" />
                    <div>
                        <h2 className="text-xl font-bold">{profile.nome}</h2>
                        <p className="text-sm text-gray-500">{profile.cargo} • {profile.localizacao}</p>
                        <p className="mt-4">{profile.resumo}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {(profile.habilidadesTecnicas || []).map(t => (
                                <span key={t} className="text-xs px-3 py-1 rounded-full border bg-blue-50 text-blue-700">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}