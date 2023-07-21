import { useAppSelector } from "./store/store";
import { exhaust } from "./utils/exhaust";
import { Home } from "./pages/Home";
import { ProjectsList } from "./pages/ProjectsList";
import { ViewProject } from "./pages/ViewProject";
import { CreateProject } from "./pages/CreateProject";

function App() {
  const root = useAppSelector((state) => state.root);

  if (root.page === "home") {
    return <Home {...root} />;
  }

  if (root.page === "projects-list") {
    return <ProjectsList {...root} />;
  }

  if (root.page === "view-project") {
    return <ViewProject {...root} />;
  }

  if (root.page === "create-project") {
    return <CreateProject {...root} />;
  }

  exhaust(root);
}

export default App;
