import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../store";
import { Project } from "../../schemas";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: [] as (Project & { internalId: string })[],
  reducers: {
    saveProject: (
      state,
      action: PayloadAction<Project & { internalId: string }>
    ) => {
      const index = state.findIndex(
        (s) => s.internalId === action.payload.internalId
      );

      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index] = action.payload;
      }
    },
  },
});

export function useProjects() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.projects);

  return {
    state,
    saveProject: (project: Project & { internalId: string }) =>
      dispatch(projectsActions.saveProject(project)),
  };
}

export const projectsActions = projectsSlice.actions;
