import { CreateProjectPage, useRoot } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { Container } from "../ds/Container";
import { PrimaryButton } from "../ds/Buttons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { useGeneratedId } from "../utils/useGeneratedId";
import { useProjects } from "../store/slices/projects";
import CurrencyInput from "react-currency-input-field";

export function CreateProject(state: CreateProjectPage) {
  const { updateCreateProjectInput, openProject } = useRoot();
  const { saveProject } = useProjects();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <>
      <NavBar />

      <Container>
        <h2>Identificação</h2>
        <TextInput
          label={"Código"}
          placeholder="P1234"
          value={state.input.id}
          onUpdate={(value) => updateCreateProjectInput({ id: value })}
        />
        <TextInput
          label={"Nome"}
          placeholder="Empresa LTDA"
          value={state.input.name}
          onUpdate={(value) => updateCreateProjectInput({ name: value })}
        />
        <TextInput
          label={"Região"}
          placeholder="Porto Alegre/RS"
          value={state.input.location}
          onUpdate={(value) => updateCreateProjectInput({ location: value })}
        />
        <h2>Projeto</h2>
        <NumberInput
          label={"Consumo anual"}
          placeholder="10.000"
          rightGroupText="kWh"
          value={state.input.yearlyConsumption}
          onUpdate={(value) =>
            updateCreateProjectInput({ yearlyConsumption: value })
          }
        />
        <TextInput
          label={"Concessionária"}
          placeholder="CEEE/Equatorial"
          value={state.input.powerDistributionCompany}
          onUpdate={(value) =>
            updateCreateProjectInput({ powerDistributionCompany: value })
          }
        />
        <TextInput
          label={"Tensão"}
          placeholder="Trifásica 220/127V"
          value={state.input.tension}
          onUpdate={(value) => updateCreateProjectInput({ tension: value })}
        />
        <NumberInput
          label={"Disjuntor (A)"}
          placeholder="50"
          value={state.input.circuitBreakerAmp}
          onUpdate={(value) =>
            updateCreateProjectInput({ circuitBreakerAmp: value })
          }
        />
        <TextInput
          label={"Telhado"}
          placeholder="Cerâmico"
          value={state.input.roofType}
          onUpdate={(value) => updateCreateProjectInput({ roofType: value })}
        />
        <NumberInput
          label={"Geração estimada (ano)"}
          placeholder="10.000"
          rightGroupText="kWh"
          value={state.input.estimatedYearlyProduction}
          onUpdate={(value) =>
            updateCreateProjectInput({ estimatedYearlyProduction: value })
          }
        />
        <NumberInput
          label={"Área necessária"}
          placeholder="60,00"
          rightGroupText="m²"
          value={state.input.necessaryArea}
          onUpdate={(value) =>
            updateCreateProjectInput({ necessaryArea: value })
          }
        />
        <NumberInput
          label={"Potência usina"}
          placeholder="12,50"
          rightGroupText="kWp"
          value={state.input.potency}
          onUpdate={(value) => updateCreateProjectInput({ potency: value })}
        />
        <NumberInput
          label={"Quantidade de módulos"}
          placeholder="20"
          rightGroupText="módulos"
          value={state.input.nrOfModules}
          onUpdate={(value) => updateCreateProjectInput({ nrOfModules: value })}
        />
        <h2>Análise do projeto</h2>
        <NumberInput
          label={"Código do UG"}
          placeholder="34712345"
          value={state.input.ugId}
          onUpdate={(value) => updateCreateProjectInput({ ugId: value })}
        />
        <CheckboxInput
          label={"Possui UC?"}
          value={state.input.hasUc}
          onUpdate={(value) => updateCreateProjectInput({ hasUc: value })}
        />
        <TextInput
          label={"Grupo"}
          placeholder="A"
          value={state.input.groupType}
          onUpdate={(value) => updateCreateProjectInput({ groupType: value })}
        />
        <MoneyInput
          label={"Tarifa"}
          placeholder="R$ 0,89"
          value={state.input.fare}
          onUpdate={(value) => updateCreateProjectInput({ fare: value })}
        />
        <img
          src={generateChartUrl("zm-0b636365-94ac-4e4f-bed2-ffdaa2f3e2ff", [
            state.input.energyConsumption,
            state.input.energyProduction,
          ])}
          alt="chart"
        />
        <h3>Consumo estimado de energia</h3>
        {months.map((month, index) => (
          <NumberInput
            label={month}
            placeholder="1.000"
            rightGroupText="kWh"
            key={index}
            value={state.input.energyConsumption[index]}
            onUpdate={(value) => {
              const updated = [...state.input.energyConsumption];
              updated[index] = value;
              updateCreateProjectInput({ energyConsumption: updated });
            }}
          />
        ))}
        <h3>Geração estimada de energia</h3>
        {months.map((month, index) => (
          <NumberInput
            label={month}
            placeholder="1.000"
            rightGroupText="kWh"
            value={state.input.energyProduction[index]}
            key={index}
            onUpdate={(value) => {
              const updated = [...state.input.energyProduction];
              updated[index] = value;
              updateCreateProjectInput({ energyProduction: updated });
            }}
          />
        ))}
        <h2>Economia</h2>
        <MoneyInput
          label={"Gasto anual SEM energia solar"}
          placeholder="R$ 13.000,00"
          value={state.input.valueWithoutSolar}
          onUpdate={(value) =>
            updateCreateProjectInput({ valueWithoutSolar: value })
          }
        />
        <MoneyInput
          label={"Gasto anual COM energia solar"}
          placeholder="R$ 2.000,00"
          value={state.input.valueWithSolar}
          onUpdate={(value) =>
            updateCreateProjectInput({ valueWithSolar: value })
          }
        />
        <h2>Equipamentos</h2>
        <TextAreaInput
          label="Módulos"
          value={state.input.equipments.modules.join("\n")}
          onUpdate={(value) =>
            updateCreateProjectInput({
              equipments: {
                ...state.input.equipments,
                modules: value.split("\n"),
              },
            })
          }
        />
        <TextAreaInput
          label="Inversores"
          value={state.input.equipments.inversors.join("\n")}
          onUpdate={(value) =>
            updateCreateProjectInput({
              equipments: {
                ...state.input.equipments,
                inversors: value.split("\n"),
              },
            })
          }
        />
        <TextAreaInput
          label="Estruturas"
          value={state.input.equipments.structures.join("\n")}
          onUpdate={(value) =>
            updateCreateProjectInput({
              equipments: {
                ...state.input.equipments,
                structures: value.split("\n"),
              },
            })
          }
        />

        <h2>Investimento e simulação financeira</h2>
        <MoneyInput
          label={"Investimento total"}
          placeholder="R$ 45.000,00"
          value={state.input.investment.totalValue}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                totalValue: value,
              },
            })
          }
        />
        <MoneyInput
          label={"Valor específico"}
          placeholder="R$ 4.000,00"
          value={state.input.investment.specifics}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                specifics: value,
              },
            })
          }
        />
        <NumberInput
          label={"Payback"}
          placeholder="3,5"
          value={state.input.investment.paybackRate}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                paybackRate: value,
              },
            })
          }
        />
        <NumberInput
          label={"TIR"}
          placeholder="3,5"
          rightGroupText="%"
          value={state.input.investment.tirPercentage}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                tirPercentage: value,
              },
            })
          }
        />
        <MoneyInput
          label={"VPL"}
          placeholder="R$ 60.000,00"
          value={state.input.investment.vplValue}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                vplValue: value,
              },
            })
          }
        />
        <MoneyInput
          label={"FC. Período"}
          placeholder="R$ 450.000,00"
          value={state.input.investment.fcPeriod}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                fcPeriod: value,
              },
            })
          }
        />
        <TextInput
          label={"Simulação Banco"}
          placeholder="SICRED"
          value={state.input.investment.bankSimulation}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                bankSimulation: value,
              },
            })
          }
        />
        <NumberInput
          label={"Parcelas"}
          placeholder="120"
          value={state.input.investment.nrOfPayments}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                nrOfPayments: value,
              },
            })
          }
        />
        <MoneyInput
          label={"Valor da parcela"}
          placeholder="R$ 900,00"
          value={state.input.investment.monthlyPaymentValue}
          onUpdate={(value) =>
            updateCreateProjectInput({
              investment: {
                ...state.input.investment,
                monthlyPaymentValue: value,
              },
            })
          }
        />
        <h2>Considerações finais</h2>
        <DateInput
          label="Validade da proposta"
          value={new Date(state.input.dueDate)}
          onUpdate={(value) =>
            updateCreateProjectInput({
              dueDate: value.toISOString(),
            })
          }
        />
        <PrimaryButton
          text="Salvar projeto"
          disabled={state.input.id === "" || state.input.name === ""}
          onClick={() => {
            saveProject(state.input);
            openProject(state.input);
          }}
          icon={faFolderPlus}
        />
      </Container>
    </>
  );
}

export function generateChartUrl(chartId: string, datasets: number[][]) {
  const parameters = datasets
    .map((dataset) => dataset.join(","))
    .map((dataset, index) => `data${index + 1}=${dataset}`)
    .join("&");

  const url = `https://quickchart.io/chart/render/${chartId}?${parameters}`;

  return url;
}

function MoneyInput({
  label,
  onUpdate,
  value,
  placeholder,
}: {
  label: string;
  placeholder?: string;
  value: number;
  onUpdate: (value: number) => void;
}) {
  const id = useGeneratedId();

  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-3 col-form-label">
        {label}
      </label>

      <div className="col-sm-9">
        <CurrencyInput
          className="form-control"
          id={id}
          name={id}
          intlConfig={{ locale: "pt-BR", currency: "BRL" }}
          placeholder={placeholder}
          decimalsLimit={2}
          defaultValue={value}
          onValueChange={(value) => {
            if (value === undefined) {
              return;
            }

            const data = parseFloat(value.replace(",", "."));
            onUpdate(data);
          }}
        />
      </div>
    </div>
  );
}

function NumberInput({
  label,
  value,
  onUpdate,
  placeholder,
  leftGroupText,
  rightGroupText,
}: {
  label: string;
  placeholder?: string;
  leftGroupText?: string;
  rightGroupText?: string;
  value: number;
  onUpdate: (value: number) => void;
}) {
  const id = useGeneratedId();
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-3 col-form-label">
        {label}
      </label>

      <div className="col-sm-9">
        <div className="input-group mb-3">
          {leftGroupText && (
            <span className="input-group-text">{leftGroupText}</span>
          )}

          <CurrencyInput
            className="form-control"
            id={id}
            name={id}
            placeholder={placeholder}
            decimalSeparator=","
            groupSeparator="."
            defaultValue={value}
            onValueChange={(value) => {
              if (value === undefined) {
                return;
              }

              const data = parseFloat(value.replace(",", "."));
              onUpdate(data);
            }}
          />

          {rightGroupText && (
            <span className="input-group-text">{rightGroupText}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function CheckboxInput({
  label,
  value,
  onUpdate,
  placeholder,
  leftGroupText,
  rightGroupText,
}: {
  label: string;
  value: boolean;
  placeholder?: string;
  leftGroupText?: string;
  rightGroupText?: string;
  onUpdate: (value: boolean) => void;
}) {
  const id = useGeneratedId();
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-3 col-form-label">
        {label}
      </label>

      <div className="col-sm-9">
        <div className="input-group mb-3">
          {leftGroupText && (
            <span className="input-group-text">{leftGroupText}</span>
          )}

          <input
            id={id}
            type="checkbox"
            className="form-check-input"
            placeholder={placeholder}
            checked={value}
            onChange={(ev) => onUpdate(ev.target.checked)}
          />

          {rightGroupText && (
            <span className="input-group-text">{rightGroupText}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function DateInput({
  label,
  value,
  onUpdate,
}: {
  label: string;
  value: Date;
  onUpdate: (value: Date) => void;
}) {
  const id = useGeneratedId();
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-3 col-form-label">
        {label}
      </label>

      <div className="col-sm-9">
        <div className="input-group mb-3">
          <input
            id={id}
            type="date"
            className="form-control"
            value={value.toISOString().substring(0, "YYYY-MM-DD".length)}
            onChange={(ev) => onUpdate(new Date(ev.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

function TextAreaInput({
  label,
  value,
  onUpdate,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onUpdate: (value: string) => void;
}) {
  const id = useGeneratedId();
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-3 col-form-label">
        {label}
      </label>

      <div className="col-sm-9">
        <div className="input-group mb-3">
          <textarea
            id={id}
            rows={5}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(ev) => onUpdate(ev.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onUpdate,
  placeholder,
  leftGroupText,
  rightGroupText,
}: {
  label: string;
  value: string;
  placeholder?: string;
  leftGroupText?: string;
  rightGroupText?: string;
  onUpdate: (value: string) => void;
}) {
  const id = useGeneratedId();
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-3 col-form-label">
        {label}
      </label>

      <div className="col-sm-9">
        <div className="input-group mb-3">
          {leftGroupText && (
            <span className="input-group-text">{leftGroupText}</span>
          )}

          <input
            id={id}
            type="text"
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(ev) => onUpdate(ev.target.value)}
          />

          {rightGroupText && (
            <span className="input-group-text">{rightGroupText}</span>
          )}
        </div>
      </div>
    </div>
  );
}
