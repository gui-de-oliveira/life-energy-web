import { ViewProjectPage, useRoot } from "../store/slices/root";
import { NavBar } from "../ds/NavBar";
import { faDownload, faEdit } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton, SecondaryButton } from "../ds/Buttons";
import { Container } from "../ds/Container";
import { ApiProject, Project } from "../schemas";
import { useState } from "react";
import { generateChartUrl } from "./CreateProject";

function format(value: number, fractionDigits: number = 0) {
  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: fractionDigits,
  });
}

function formatMoney(value: number) {
  return `R$ ${format(value)}`;
}

function Accordion({
  items,
}: {
  items: { header: string; content: React.ReactNode }[];
}) {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  return (
    <div className="accordion mb-3">
      {items.map(({ header, content }, index) => (
        <div
          className="accordion-item"
          key={index}
          onClick={() => setSelectedItemId((s) => (s === index ? null : index))}
        >
          <h2 className="accordion-header">
            <button
              className={
                `accordion-button` +
                (selectedItemId === index ? "" : " collapsed")
              }
              type="button"
            >
              {header}
            </button>
          </h2>

          <div
            className={
              `accordion-collapse collapse` +
              (selectedItemId === index ? " show" : "")
            }
          >
            <div className="accordion-body">{content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Info({ data }: { data: Record<string, string | number> }) {
  return (
    <table className="table table-hover">
      <tbody>
        {Object.entries(data).map(([label, value], index) => (
          <tr key={index}>
            <th scope="row">{label}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ViewProject(state: ViewProjectPage) {
  const { editProject } = useRoot();

  const p = state.project;
  return (
    <>
      <NavBar />
      <Container>
        <h2>
          {state.project.id} - {state.project.name}
        </h2>
        <Accordion
          items={[
            {
              header: "Identificação",
              content: (
                <Info
                  data={{
                    Código: `${p.id} - ${p.name}`,
                    Nome: p.name,
                    Região: p.location,
                  }}
                />
              ),
            },

            {
              header: "Projeto",
              content: (
                <Info
                  data={{
                    "Consumo anual": `${format(
                      transform(p).yearlyConsumption
                    )} kWp`,
                    "Geração estimada ao ano": `${format(
                      transform(p).estimatedYearlyProduction
                    )} kWp`,
                    Concessionária: p.powerDistributionCompany,
                    Tensão: p.tension,
                    "Disjuntor (A)": p.circuitBreakerAmp,
                    Telhado: p.roofType,
                    "Área necessária": `${p.necessaryArea} m²`,
                    "Potência usina": `${p.potency} kWp`,
                    "Quantidade de módulos": `${p.nrOfModules} módulos`,
                  }}
                />
              ),
            },

            {
              header: "Análise de projeto",
              content: (
                <>
                  <Info
                    data={{
                      "Código do UG": p.ugId,
                      "Possui UC?": p.hasUc ? "SIM" : "NÃO",
                      Grupo: p.groupType,
                      Tarifa: formatMoney(p.fare),
                    }}
                  />
                  <img
                    alt="chart"
                    src={generateChartUrl(
                      "zm-0b636365-94ac-4e4f-bed2-ffdaa2f3e2ff",
                      [p.energyConsumption, p.energyProduction]
                    )}
                  />
                </>
              ),
            },

            {
              header: "Investimento e simulação financeira",
              content: (
                <Info
                  data={{
                    "Investimento total": formatMoney(p.investment.totalValue),
                    "Valor específico": formatMoney(p.investment.specifics),
                    Payback: p.investment.paybackRate,
                    TIR: p.investment.tirPercentage,
                    VPL: p.investment.vplValue,
                    "FC. Período": p.investment.fcPeriod,
                    "Simulação Banco": p.investment.bankSimulation,
                    Parcelas: p.investment.nrOfPayments,
                    "Valor da parcela": p.investment.monthlyPaymentValue,
                  }}
                />
              ),
            },
          ]}
        />
        <SecondaryButton
          text="Editar projeto"
          onClick={() => editProject(state.project)}
          icon={faEdit}
        />{" "}
        <PrimaryButton
          text="Baixar proposta"
          onClick={() => downloadPortfolio(transform(state.project))}
          icon={faDownload}
        />
      </Container>
    </>
  );
}

function transform(project: Project): ApiProject {
  return {
    ...project,

    yearlyConsumption: project.energyConsumption.reduce(
      (acc, element) => acc + element
    ),
    estimatedYearlyProduction: project.energyProduction.reduce(
      (acc, element) => acc + element
    ),
  };
}

const API_BASEURL = "http://67.205.147.225:3001";
// const API_BASEURL = "http://localhost:3001";

function downloadPortfolio(project: ApiProject) {
  const data = encodeURI(JSON.stringify(project));
  window.open(`${API_BASEURL}/portfolio?data=${data}`, "_blank");
}
