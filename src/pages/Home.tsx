import { HomePage, useRoot } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../ds/Card";
import { Container } from "../ds/Container";

export function Home(_state: HomePage) {
  const { goToProjectsPage } = useRoot();

  return (
    <>
      <NavBar />

      <Container>
        <Card
          icon={faFolderOpen}
          title="Projetos"
          description="Gerenciamento de projetos"
          onClick={goToProjectsPage}
        />
      </Container>
    </>
  );
}
