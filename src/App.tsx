import "./main.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Preloader from "./components/PreLoader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fonction de chargement des assets
    const loadAssets = (): Promise<void> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000); // Simulez 3 secondes de chargement
      });
    };

    // Charger les assets et mettre à jour l'état de chargement
    loadAssets().then(() => {
      setLoading(false);
    });
  }, []);
  return (
    <Routes>
      l
      <Route path="/" element={loading ? <Preloader/>:<Home/>} />
    
    </Routes>
  );
}

export default App;