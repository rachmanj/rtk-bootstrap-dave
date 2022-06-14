import { configureStore } from "@reduxjs/toolkit";
import bucsReducer from "../features/bucs/bucsSlice";
import projectsReducer from "../features/projects/projectsSlice";

export const store = configureStore({
    reducer: {
        bucs: bucsReducer,
        projects: projectsReducer,
    }
})