import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../features/education/educationSlice";
import skillsReducer, { loadSkills } from "../features/skills/skillsSlice";

const store = configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
  },
});

store.subscribe(() => {
  const skills = store.getState().skills;
  localStorage.setItem("skills", JSON.stringify(skills));
});

// Загружаем навыки из localStorage при инициализации хранилища
store.dispatch(loadSkills());

export default store;
