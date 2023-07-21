import { CreateProjectPage } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { Container } from "../ds/Container";
import { PrimaryButton } from "../ds/Buttons";
import { placeholderFn } from "../utils/placeholderFn";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export function CreateProject(_state: CreateProjectPage) {
  return (
    <>
      <NavBar />

      <Container>
        <h2>Identificação</h2>
        <TextInput label={"Id"} />
        <TextInput label={"Nome"} />
        <TextInput label={"Ícone"} />
        <TextInput label={"Data"} />
        <TextInput label={"Lugar"} />

        <h2>Especificações</h2>
        <TextInput label={"Consumo ao ano"} />
        <TextInput label={"Concessionária"} />
        <TextInput label={"Tensão"} />
        <TextInput label={"Disjuntor"} />
        <TextInput label={"Transformador"} />

        <TextInput label={"Potência"} />
        <TextInput label={"Módulos"} />
        <TextInput label={"Geração ao ano"} />
        <TextInput label={"% de geração"} />
        <TextInput label={"Área estimada"} />
        <TextInput label={"Telhado"} />

        <h2>Análise do Projeto</h2>
        <TextInput label={"Consumo de kWh por mês"} />

        <h2>Equipamentos</h2>
        <TextInput label={"Equipamentos"} />

        <h2>Investimento</h2>
        <TextInput label={"Investimento"} />
        <PrimaryButton
          text="Criar projeto"
          onClick={placeholderFn}
          icon={faFolderPlus}
        />
      </Container>
    </>
  );
}

function TextInput({ label }: { label: string }) {
  return (
    <div className="row mb-3">
      <label htmlFor="exampleInputEmail1" className="col-sm-3 col-form-label">
        {label}
      </label>

      <div className="col-sm-9">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    </div>
  );
}
