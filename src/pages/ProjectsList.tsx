import { ProjectsListPage, useRoot } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { Card } from "../ds/Card";
import { faCar, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton } from "../ds/Buttons";
import { Container } from "../ds/Container";

export function ProjectsList(_state: ProjectsListPage) {
  const { openProject, createProject } = useRoot();

  return (
    <>
      <NavBar />

      <Container>
        <Card
          icon={faCar}
          title="P2337 - PAMPA CAR CENTRO AUTOMATIVO LTDA"
          description="30/06/2023 - Porto Alegre/RS"
          onClick={openProject}
        />

        <PrimaryButton
          text="Criar projeto"
          onClick={createProject}
          icon={faFolderPlus}
        />
      </Container>
    </>
  );
}
