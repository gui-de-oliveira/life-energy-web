import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../store";
import { Project } from "../../schemas";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: [] as Project[],
  reducers: {
    createProject: (state, action: PayloadAction<Project>) => {
      state.push(action.payload);
    },
  },
});

export function useProjects() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.projects);

  return {
    state,
    createProject: (project: Project) =>
      dispatch(projectsActions.createProject(project)),
  };
}

export const projectsActions = projectsSlice.actions;
