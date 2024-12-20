import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронное действие для загрузки данных из localStorage
export const loadSkills = createAsyncThunk("skills/loadSkills", async () => {
  const skills = localStorage.getItem("skills");
  return skills ? JSON.parse(skills) : [];
});

const initialState = {
  list: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    setSkills: (state, action) => {
      state.list = action.payload;
    },
    addSkill: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadSkills.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { setSkills, addSkill } = skillsSlice.actions;

export default skillsSlice.reducer;

// Сохранение данных в localStorage при изменении состояния
export const saveSkillsToLocalStorage = (skills) => {
  localStorage.setItem("skills", JSON.stringify(skills));
};
