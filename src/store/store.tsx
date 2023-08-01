import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { root } from "./slices/root";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { projectsSlice } from "./slices/projects";

import { createTransform } from "redux-persist";
import { projectSchema } from "../schemas";
import { z } from "zod";

type Reducer = ReturnType<typeof projectsSlice.reducer>;

const transform = createTransform(
  function save(inboundState: Reducer) {
    return inboundState;
  },

  function rehydrate(outboundState: unknown): Reducer {
    const result = projectSchema
      .omit({ panelPotency: true })
      .and(z.object({ panelPotency: z.number().optional() }))
      .and(z.object({ internalId: z.string() }))
      .array()
      .safeParse(outboundState);

    if (!result.success) {
      return [];
    }

    return result.data.map((project) => ({
      ...project,
      panelPotency: project.panelPotency ?? 555,
    }));
  },

  { whitelist: [projectsSlice.name] }
);

const rootReducer = combineReducers({
  root: root.reducer,
  projects: projectsSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    whitelist: [projectsSlice.name],
    storage,
    transforms: [transform],
  },
  rootReducer
) as typeof rootReducer;

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function createStore() {
  const persistor = persistStore(store);
  return { store, persistor };
}
