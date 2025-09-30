import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Theme {
  Dark = "dark",
  Autumn = "autumn",
  Winter = "winter",
  Spring = "spring",
  Summer = "summer",
}

interface ThemeState {
  theme: Theme;
}

function getSeasonTheme(): Theme {
  const now = new Date();
  const month = now.getMonth() + 1; // Январь = 0, поэтому +1

  // Зима: декабрь (12), январь (1), февраль (2)
  if (month === 12 || month === 1 || month === 2) {
    return Theme.Winter;
  }
  // Весна: март (3), апрель (4), май (5)
  if (month >= 3 && month <= 5) {
    return Theme.Spring;
  }
  // Лето: июнь (6), июль (7), август (8)
  if (month >= 6 && month <= 8) {
    return Theme.Summer;
  }
  // Осень: сентябрь (9), октябрь (10), ноябрь (11)
  if (month >= 9 && month <= 11) {
    return Theme.Autumn;
  }
  // На всякий случай, если что-то пойдёт не так — дефолтная тема
  return Theme.Dark;
}

const initialState: ThemeState = {
  theme: getSeasonTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
