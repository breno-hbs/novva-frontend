import React, { useState, useEffect } from "react";

export default function EmailModal({ open, onClose, profileName }) {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
        if (open) {
            window.addEventListener("keydown", onKey);
        }
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // Reset states when modal opens
    useEffect(() => {
        if (open) {
            // Reset on next tick to avoid sync setState
            const timer = setTimeout(() => {
                setSubject("");
                setMessage("");
                setShowSuccess(false);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [open]);

    if (!open) return null;

    const handleSendEmail = () => {
        if (!message.trim()) {
            alert("Por favor, escreva uma mensagem antes de enviar.");
            return;
        }

        setIsSending(true);

        // Simula envio de e-mail
        setTimeout(() => {
            setIsSending(false);
            setShowSuccess(true);

            // Fecha o modal após 2 segundos
            setTimeout(() => {
                onClose();
            }, 2000);
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            {!showSuccess ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full z-10 max-h-[90vh] overflow-auto">
                    {/* Header */}
                    <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center rounded-t-2xl">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Enviar Mensagem</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Para: {profileName}</p>
                        </div>
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
                        <div className="space-y-4">
                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Assunto
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Digite o assunto do e-mail"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Mensagem <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Digite sua mensagem..."
                                    rows={8}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none transition"
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {message.length} caracteres
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg transition"
                                disabled={isSending}
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={handleSendEmail}
                                disabled={isSending}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSending ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                        </svg>
                                        Enviar Mensagem
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                // Success Message
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full z-10 p-8 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        E-mail Enviado!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Sua mensagem foi enviada com sucesso para {profileName}.
                    </p>
                </div>
            )}
        </div>
    );
}

