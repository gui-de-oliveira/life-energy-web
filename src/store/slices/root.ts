import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../store";
import { Project } from "../../schemas";
import { v4 as uuidv4 } from "uuid";

export type HomePage = {
  page: "home";
};

export type ProjectsListPage = {
  page: "projects-list";
};

export type ViewProjectPage = {
  page: "view-project";
  project: Project & { internalId: string };
};

export type CreateProjectPage = {
  page: "create-project";
  input: Project & { internalId: string };
};

type Root = HomePage | ProjectsListPage | ViewProjectPage | CreateProjectPage;

export const root = createSlice({
  name: "root",
  initialState: { page: "home" } as Root,
  reducers: {
    goToHomePage: (): HomePage => ({ page: "home" }),
    goToProjectsPage: (): ProjectsListPage => ({ page: "projects-list" }),
    openProject: (
      _state,
      project: PayloadAction<Project & { internalId: string }>
    ): ViewProjectPage => ({
      page: "view-project",
      project: project.payload,
    }),

    editProject: (
      _state,
      project: PayloadAction<Project & { internalId: string }>
    ): CreateProjectPage => ({
      page: "create-project",
      input: project.payload,
    }),

    goToCreateProjectPage: (): CreateProjectPage => ({
      page: "create-project",
      input: {
        internalId: uuidv4(),
        id: "",
        name: "",
        location: "",
        createdDate: new Date().toISOString(),

        powerDistributionCompany: "",
        tension: "",
        circuitBreakerAmp: 0,
        roofType: "",
        panelPotency: 0,
        nrOfModules: 0,

        energyConsumption: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        energyProduction: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ugId: 0,
        ucCode: "",
        groupType: "",
        fare: 0,

        valueWithoutSolar: 0,
        valueWithSolar: 0,

        equipments: {
          modules: [
            "22 módulos",
            "555 Wp",
            "DAH SOLAR",
            "Mono Half-cell",
            "21,48% de eficiência",
            "25 anos de garantia de performance 84,8%",
          ],

          inversors: [
            "Inversor Solis",
            "10 kW de potência",
            "10 anos de garantia",
            "15 anos de vida útil",
          ],

          structures: [
            "Estruturas com 100% alumínio",
            "Proteção - String Box CC e CA",
            "Cabeamento de dupla proteção",
          ],
        },

        investment: {
          totalValue: 0,
          specifics: 0,
          paybackRate: 0,
          tirPercentage: 0,
          vplValue: 0,
          fcPeriod: 0,
          bankSimulation: "",
          nrOfPayments: 0,
          monthlyPaymentValue: 0,
        },

        dueDate: new Date().toISOString(),
      },
    }),

    updateCreateProjectInput: (
      state,
      action: PayloadAction<Partial<CreateProjectPage["input"]>>
    ) => {
      if (state.page !== "create-project") {
        return;
      }

      state.input = { ...state.input, ...action.payload };
    },

    createProject: (
      state,
      action: PayloadAction<Partial<CreateProjectPage["input"]>>
    ) => {
      if (state.page !== "create-project") {
        return;
      }

      state.input = { ...state.input, ...action.payload };
    },
  },
});

export function useRoot() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.root);

  return {
    state,
    goToHomePage: () => dispatch(root.actions.goToHomePage()),
    goToProjectsPage: () => dispatch(root.actions.goToProjectsPage()),
    openProject: (project: Project & { internalId: string }) =>
      dispatch(root.actions.openProject(project)),
    editProject: (project: CreateProjectPage["input"]) =>
      dispatch(root.actions.editProject(project)),

    goToCreateProjectPage: () => dispatch(root.actions.goToCreateProjectPage()),
    updateCreateProjectInput: (payload: Partial<CreateProjectPage["input"]>) =>
      dispatch(root.actions.updateCreateProjectInput(payload)),
  };
}

export const rootActions = root.actions;
