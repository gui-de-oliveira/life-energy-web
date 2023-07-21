import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../store";
import { Project } from "./projects";

export type HomePage = {
  page: "home";
};

export type ProjectsListPage = {
  page: "projects-list";
};

export type ViewProjectPage = {
  page: "view-project";
  project: Project;
};

export type CreateProjectPage = {
  page: "create-project";
  input: {
    id: string;
    name: string;
  };
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
      project: PayloadAction<Project>
    ): ViewProjectPage => ({
      page: "view-project",
      project: project.payload,
    }),
    goToCreateProjectPage: (): CreateProjectPage => ({
      page: "create-project",
      input: { id: "", name: "" },
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
    openProject: (project: Project) =>
      dispatch(root.actions.openProject(project)),

    goToCreateProjectPage: () => dispatch(root.actions.goToCreateProjectPage()),
    updateCreateProjectInput: (payload: Partial<CreateProjectPage["input"]>) =>
      dispatch(root.actions.updateCreateProjectInput(payload)),
  };
}

export const rootActions = root.actions;
