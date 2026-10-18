import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello" }],
};

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
      });
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, removetodo } = todoslice.actions;

export const todoreducer = todoslice.reducer;