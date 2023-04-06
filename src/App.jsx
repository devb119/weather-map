import "./App.css";
import Menu from "./components/Menu";
import LeafletMap from "./map/LeafletMap";

function App() {
  return (
    <div className="h-screen w-screen relative z-0">
      <LeafletMap />
      <Menu />
    </div>
  );
}

export default App;
