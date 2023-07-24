import { ViewProjectPage } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { faDownload, faEdit } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton, SecondaryButton } from "../ds/Buttons";
import { placeholderFn } from "../utils/placeholderFn";
import { Container } from "../ds/Container";
import { Project } from "../schemas";

export function ViewProject(state: ViewProjectPage) {
  return (
    <>
      <NavBar />
      <Container>
        <h2>
          {state.project.id} - {state.project.name}
        </h2>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th scope="row">Identificação</th>
              <td>
                {state.project.id} - {state.project.name}
              </td>
            </tr>
          </tbody>
        </table>{" "}
        <SecondaryButton
          text="Editar projeto"
          onClick={placeholderFn}
          icon={faEdit}
        />{" "}
        <PrimaryButton
          text="Baixar proposta"
          onClick={() => downloadPortfolio(state.project)}
          icon={faDownload}
        />
      </Container>
    </>
  );
}

const API_BASEURL = "http://67.205.147.225:3001";
// const API_BASEURL = "http://localhost:3001";

function downloadPortfolio(project: Project) {
  const data = encodeURI(JSON.stringify(project));
  window.open(`${API_BASEURL}/portfolio?data=${data}`, "_blank");
}
