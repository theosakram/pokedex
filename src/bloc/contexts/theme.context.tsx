import { ThemeActions } from "../store/actions";
import { dark, light } from "../../config/theme";
import { createContext, useReducer, FC, useContext } from "react";
import { ThemeInitialState, ThemeReducer } from "../store/reducers/theme.reducer";

const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

export const ThemeProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, ThemeInitialState);
    const { SET_DARK, SET_LIGHT } = ThemeActions;

    const setLight = () => dispatch({ type: SET_LIGHT, value: light });
    const setDark = () => dispatch({ type: SET_DARK, value: dark });

    const changeTheme = () => {
        if (state.theme.name === "dark") return setLight();

        return setDark();
    };

    return <ThemeContext.Provider value={{ state, changeTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
