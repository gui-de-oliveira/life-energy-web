import { createSlice } from "@reduxjs/toolkit";

export type HomePage = {
  page: "home";
};

export type ProjectsPage = {
  page: "projects";
};

type Root = HomePage | ProjectsPage;

export const root = createSlice({
  name: "root",
  initialState: { page: "home" } as Root,
  reducers: {
    goToHomePage: (): HomePage => ({ page: "home" }),
    goToProjectsPage: (): ProjectsPage => ({ page: "projects" }),
  },
});

export const rootActions = root.actions;
