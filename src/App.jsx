import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition">
      <Navbar />
      <div className="p-10 text-3xl text-black dark:text-white">
        Dark Mode funcionando!
      </div>
    </div>
  );
}