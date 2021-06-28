import styled from "@emotion/styled";
import { useTheme } from "../../../bloc/contexts";

export const usePkemonListStyle = () => {
    const { state } = useTheme();
    const Div = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Button = styled.button`
        height: 40px;
        padding: 10px;
        cursor: pointer;
        background: ${state.theme.name === "dark" ? state.theme.info : state.theme.danger};
        border-radius: 4px;
        border: none;
        color: white;
        margin-top: 50px;
    `;

    return {
        Div,
        Button,
    };
};
