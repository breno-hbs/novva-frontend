import Navbar from "./components/Navbar";
import "./styles/index.css";
import Footer from "./components/Footer";

export default function App() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <Navbar />

      <div className="content">
        {
          
        }
      </div>

      <Footer />
    </>
  );
}
