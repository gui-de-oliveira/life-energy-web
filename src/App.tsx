import { useAppSelector } from "./store/store";
import { exhaust } from "./utils/exhaust";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  const root = useAppSelector((state) => state.root);

  if (root.page === "home") {
    return <Home {...root} />;
  }

  if (root.page === "projects") {
    return <Projects {...root} />;
  }

  exhaust(root);
}

export default App;
