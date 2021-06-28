import styled from "@emotion/styled";
import { useTheme } from "../../../bloc/contexts";

export const useMyPokemonPageStyle = () => {
    const { state } = useTheme();

    const Text = styled.p`
        color: ${state.theme.text};
        font-size: 20px;
        text-align: center;
    `;

    const Title = styled.h1`
        color: ${state.theme.text};
        font-size: 26px;
    `;

    const BtnCancel = styled.button`
        height: 30px;
        padding: 10px;
        cursor: pointer;
        background: ${state.theme.name === "dark" ? state.theme.info : state.theme.danger};
        border-radius: 4px;
        border: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const BtnConfirm = styled.button`
        height: 30px;
        padding: 10px;
        cursor: pointer;
        background: ${state.theme.name === "dark" ? state.theme.danger : state.theme.info};
        border-radius: 4px;
        border: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
    `;

    const ModalDiv = styled.div`
        width: 100%;
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 15px;
    `;

    return {
        Text,
        Title,
        BtnCancel,
        BtnConfirm,
        ModalDiv,
    };
};
