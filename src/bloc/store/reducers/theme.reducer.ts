import { ThemeActions } from "../actions";
import { dark } from "../../../config/theme";

const themeStorage = (): Theme => {
    const theme = localStorage.getItem("theme");

    if (theme) return JSON.parse(theme);

    return dark;
};

export const ThemeInitialState: ThemeState = {
    theme: themeStorage(),
};

export const ThemeReducer = (state: ThemeState, action: Action): ThemeState => {
    const { type, value } = action;
    const { SET_DARK, SET_LIGHT } = ThemeActions;

    switch (type) {
        case SET_DARK:
            localStorage.setItem("theme", JSON.stringify(value));

            return {
                ...state,
                theme: value,
            };

        case SET_LIGHT:
            localStorage.setItem("theme", JSON.stringify(value));

            return {
                ...state,
                theme: value,
            };

        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};
