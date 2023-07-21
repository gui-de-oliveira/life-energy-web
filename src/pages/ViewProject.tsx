import { ViewProjectPage } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { faDownload, faEdit } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton, SecondaryButton } from "../ds/Buttons";
import { placeholderFn } from "../utils/placeholderFn";
import { LineSpacer } from "../ds/LineSpacer";
import { Container } from "../ds/Container";

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
      </Container>

      <div className="navbar sticky-bottom navbar-light bg-light">
        <div style={{ width: "100%", direction: "rtl" }}>
          <LineSpacer />
          <PrimaryButton
            text="Baixar proposta"
            onClick={placeholderFn}
            icon={faDownload}
          />{" "}
          <SecondaryButton
            text="Editar projeto"
            onClick={placeholderFn}
            icon={faEdit}
          />
        </div>
      </div>
    </>
  );
}
