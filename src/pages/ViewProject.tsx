import { ViewProjectPage } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { faDownload, faEdit } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton, SecondaryButton } from "../ds/Buttons";
import { placeholderFn } from "../utils/placeholderFn";
import { LineSpacer } from "../ds/LineSpacer";
import { Container } from "../ds/Container";

export function ViewProject(_state: ViewProjectPage) {
  return (
    <>
      <NavBar />

      <Container>
        <h2>P1337 - LUCI IMOVEIS LTDA</h2>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th scope="row">Identificação</th>
              <td>P1337 - LUCI IMOVEIS LTDA</td>
            </tr>
            <tr>
              <th scope="row">Consumo ao ano</th>
              <td>31,800 kWh</td>
            </tr>
            <tr>
              <th scope="row">Concessionária</th>
              <td>Trifásica 380/220 V</td>
            </tr>
            <tr>
              <th scope="row">Disjuntor</th>
              <td>40A</td>
            </tr>
            <tr>
              <th scope="row">Transformador</th>
              <td>Não necessário</td>
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
