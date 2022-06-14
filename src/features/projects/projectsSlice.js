import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    code: "017C",
    location: "Malinau",
  },
  {
    id: 2,
    code: "021C",
    location: "Bogor",
  },
  {
    id: 3,
    code: "022C",
    location: "Melak",
  },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export const selectAllProjects = (state) => state.projects;

export default projectsSlice.reducer;
