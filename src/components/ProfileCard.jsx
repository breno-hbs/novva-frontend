export default function ProfileCard({ pessoa }) {
  return (
    <div className="border rounded p-4 shadow">
      <img
        src={pessoa.foto}
        alt={pessoa.nome}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="mt-2 text-lg font-bold">{pessoa.nome}</h3>
      <p className="text-sm text-gray-600">{pessoa.cargo}</p>
      <p className="text-xs text-gray-500">{pessoa.localizacao}</p>
    </div>
  );
}
