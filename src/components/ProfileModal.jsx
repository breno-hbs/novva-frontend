import React, { useEffect, useState } from "react";
import EmailModal from "./EmailModal";
import SuccessNotification from "./SuccessNotification";

export default function ProfileModal({ open, onClose, profile }) {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    useEffect(() => {
        if (!open) {
            setShowEmailModal(false);
            setShowSuccessNotification(false);
        }
    }, [open]);

    if (!open || !profile) return null;

    const handleRecommend = () => {
        setSuccessMessage(`Você recomendou ${profile.nome} com sucesso!`);
        setShowSuccessNotification(true);
    };

    const handleSendMessage = () => {
        setShowEmailModal(true);
    };

    const handleCloseEmailModal = () => {
        setShowEmailModal(false);
    };

    return (
        <>
            <SuccessNotification
                show={showSuccessNotification}
                onClose={() => setShowSuccessNotification(false)}
                message={successMessage}
            />

            <EmailModal
                open={showEmailModal}
                onClose={handleCloseEmailModal}
                profileName={profile.nome}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full z-10 max-h-[90vh] overflow-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center rounded-t-2xl">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Perfil Profissional</h2>
                    <button
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Profile Header */}
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start pb-6 border-b border-gray-200 dark:border-gray-700">
                        <img
                            src={profile.foto}
                            alt={profile.nome}
                            className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900 shadow-lg"
                        />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{profile.nome}</h2>
                            <p className="text-lg text-blue-600 dark:text-blue-400 mt-1">{profile.cargo}</p>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mt-3">
                                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                    {profile.localizacao}
                                </p>

                                {profile.area && (
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800 rounded-full">
                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                        </svg>
                                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                                            Área: {profile.area}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Resumo */}
                    {profile.resumo && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sobre</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{profile.resumo}</p>
                        </div>
                    )}

                    {/* Habilidades Técnicas */}
                    {profile.habilidadesTecnicas && profile.habilidadesTecnicas.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Habilidades Técnicas</h3>
                            <div className="flex flex-wrap gap-2 items-center">
                                {profile.habilidadesTecnicas.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Soft Skills */}
                    {profile.softSkills && profile.softSkills.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Soft Skills</h3>
                            <div className="flex flex-wrap gap-2 items-center">
                                {profile.softSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center justify-center px-4 py-2 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium whitespace-nowrap"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Experiências */}
                    {profile.experiencias && profile.experiencias.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Experiência Profissional</h3>
                            <div className="space-y-4">
                                {profile.experiencias.map((exp, idx) => (
                                    <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{exp.cargo}</h4>
                                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{exp.empresa}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            {exp.inicio} - {exp.fim || "Atual"}
                                        </p>
                                        {exp.descricao && (
                                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{exp.descricao}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Formação */}
                    {profile.formacao && profile.formacao.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Formação Acadêmica</h3>
                            <div className="space-y-3">
                                {profile.formacao.map((form, idx) => (
                                    <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{form.curso}</h4>
                                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{form.instituicao}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{form.ano}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Projetos */}
                    {profile.projetos && profile.projetos.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Projetos</h3>
                            <div className="space-y-3">
                                {profile.projetos.map((proj, idx) => (
                                    <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{proj.titulo}</h4>
                                        {proj.descricao && (
                                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{proj.descricao}</p>
                                        )}
                                        {proj.link && (
                                            <a
                                                href={proj.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block"
                                            >
                                                Ver projeto →
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Certificações */}
                    {profile.certificacoes && profile.certificacoes.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Certificações</h3>
                            <ul className="space-y-2">
                                {profile.certificacoes.map((cert, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                        </svg>
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Idiomas */}
                    {profile.idiomas && profile.idiomas.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Idiomas</h3>
                            <div className="flex flex-wrap gap-3 items-center">
                                {profile.idiomas.map((idioma, idx) => (
                                    <div key={idx} className="inline-flex items-center px-4 py-2 bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-lg whitespace-nowrap">
                                        <span className="font-medium text-orange-700 dark:text-orange-300">{idioma.idioma}</span>
                                        <span className="text-sm text-orange-600 dark:text-orange-400 ml-2">• {idioma.nivel}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Áreas de Interesse */}
                    {profile.areainteresses && profile.areainteresses.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Áreas de Interesse</h3>
                            <div className="flex flex-wrap gap-2 items-center">
                                {profile.areainteresses.map((interesse, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm whitespace-nowrap"
                                    >
                                        {interesse}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Botões de Ação */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            className="
                                flex items-center justify-center gap-2 px-6 py-3
                                bg-blue-600 hover:bg-blue-700
                                text-white font-semibold rounded-lg
                                transition-all duration-200
                                shadow-md hover:shadow-lg
                                transform hover:scale-[1.02]
                            "
                            onClick={handleRecommend}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                            </svg>
                            Recomendar profissional
                        </button>

                        <button
                            className="
                                flex items-center justify-center gap-2 px-6 py-3
                                bg-white dark:bg-gray-700
                                hover:bg-gray-50 dark:hover:bg-gray-600
                                text-gray-700 dark:text-gray-200
                                font-semibold rounded-lg
                                border-2 border-gray-300 dark:border-gray-600
                                transition-all duration-200
                                shadow-sm hover:shadow-md
                                transform hover:scale-[1.02]
                            "
                            onClick={handleSendMessage}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            Enviar mensagem
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}