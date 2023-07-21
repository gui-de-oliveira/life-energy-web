import { ProjectsPage } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";

export function Projects(_state: ProjectsPage) {
  return (
    <>
      <NavBar />
      <div className="container">Projects!</div>
    </>
  );
}
