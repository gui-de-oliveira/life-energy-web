import { CreateProjectPage, useRoot } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { Container } from "../ds/Container";
import { PrimaryButton } from "../ds/Buttons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { useGeneratedId } from "../utils/useGeneratedId";
import { useProjects } from "../store/slices/projects";

export function CreateProject(state: CreateProjectPage) {
  const { updateCreateProjectInput, goToProjectsPage } = useRoot();
  const { createProject } = useProjects();

  return (
    <>
      <NavBar />

      <Container>
        <h2>Identificação</h2>
        <TextInput
          label={"Id"}
          value={state.input.id}
          onUpdate={(value) => updateCreateProjectInput({ id: value })}
        />

        <TextInput
          label={"Nome"}
          value={state.input.name}
          onUpdate={(value) => updateCreateProjectInput({ name: value })}
        />

        <PrimaryButton
          text="Criar projeto"
          disabled={state.input.id === "" || state.input.name === ""}
          onClick={() => {
            createProject(state.input);
            goToProjectsPage();
          }}
          icon={faFolderPlus}
        />
      </Container>
    </>
  );
}

function TextInput({
  label,
  value,
  onUpdate,
}: {
  label: string;
  value: string;
  onUpdate: (value: string) => void;
}) {
  const id = useGeneratedId();
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-3 col-form-label">
        {label}
      </label>

      <div className="col-sm-9">
        <input
          id={id}
          className="form-control"
          type="text"
          value={value}
          onChange={(ev) => onUpdate(ev.target.value)}
        />
      </div>
    </div>
  );
}
