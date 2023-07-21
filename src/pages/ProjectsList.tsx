import { ProjectsListPage, useRoot } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { Card } from "../ds/Card";
import { faCar, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton } from "../ds/Buttons";
import { Container } from "../ds/Container";
import { useProjects } from "../store/slices/projects";

export function ProjectsList(_state: ProjectsListPage) {
  const { openProject, goToCreateProjectPage: createProject } = useRoot();
  const { state } = useProjects();

  return (
    <>
      <NavBar />

      <Container>
        {state.map((project, index) => (
          <Card
            key={index}
            icon={faCar}
            title={`${project.id} - ${project.name}`}
            description="30/06/2023 - Porto Alegre/RS"
            onClick={() => openProject(project)}
          />
        ))}

        <PrimaryButton
          text="Criar projeto"
          onClick={createProject}
          icon={faFolderPlus}
        />
      </Container>
    </>
  );
}
