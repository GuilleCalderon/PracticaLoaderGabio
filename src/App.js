import { useState } from "react";
import "./App.css";
import WhoImItemList from "./components/WhoImItemList";

function LoaderPractica() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <button
        className="button"
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }}
      >
        Cargar
      </button>

      <WhoImItemList loading={loading} />
    </div>
  );
}

export default LoaderPractica;
