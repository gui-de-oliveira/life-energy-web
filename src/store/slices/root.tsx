import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../store";

export type HomePage = {
  page: "home";
};

export type ProjectsListPage = {
  page: "projects-list";
};

export type ViewProjectPage = {
  page: "view-project";
};

export type CreateProjectPage = {
  page: "create-project";
};

type Root = HomePage | ProjectsListPage | ViewProjectPage | CreateProjectPage;

export const root = createSlice({
  name: "root",
  initialState: { page: "home" } as Root,
  reducers: {
    goToHomePage: (): HomePage => ({ page: "home" }),
    goToProjectsPage: (): ProjectsListPage => ({ page: "projects-list" }),
    openProject: (): ViewProjectPage => ({ page: "view-project" }),
    createProject: (): CreateProjectPage => ({ page: "create-project" }),
  },
});

export function useRoot() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.root);

  return {
    state,
    goToHomePage: () => dispatch(root.actions.goToHomePage()),
    goToProjectsPage: () => dispatch(root.actions.goToProjectsPage()),
    openProject: () => dispatch(root.actions.openProject()),
    createProject: () => dispatch(root.actions.createProject()),
  };
}

export const rootActions = root.actions;
