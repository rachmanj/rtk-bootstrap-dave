import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    rab_no: "RAB-001",
    date: "2022-01-01",
    description: "Description 1",
    project_id: 1,
    status: "Progress",
    budget: 99999,
    created_at: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    rab_no: "RAB-002",
    date: "2022-05-01",
    description: "Description 2",
    project_id: 2,
    status: "Pending",
    budget: 54321,
    created_at: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 3,
    rab_no: "RAB-003",
    date: "2022-05-01",
    description: "Description 3",
    project_id: 3,
    status: "Pending",
    budget: 22222,
    created_at: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const bucsSlice = createSlice({
  name: "bucs",
  initialState,
  reducers: {
    bucAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(rabNo, date, description, projectId, budget) {
        return {
          payload: {
            id: nanoid(),
            rab_no: rabNo,
            date: date,
            description,
            project_id: parseInt(projectId),
            status: "Progress",
            budget: parseInt(budget),
            created_at: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { bucId, reaction } = action.payload;
      const existingBuc = state.find((buc) => buc.id === bucId);
      if (existingBuc) {
        existingBuc.reactions[reaction]++;
      }
    },
  },
});

export const selectAllBucs = (state) => state.bucs;

export const { bucAdded, reactionAdded } = bucsSlice.actions;

export default bucsSlice.reducer;
