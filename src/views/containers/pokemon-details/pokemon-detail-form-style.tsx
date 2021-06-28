import styled from "@emotion/styled";
import { useTheme } from "../../../bloc/contexts";

export const useFormStyle = () => {
    const { state } = useTheme();

    const Form = styled.form`
        display: flex;
        width: 100%;
        height: inherit;
        flex-direction: column;
        padding: 10px;
        position: relative;

        label {
            color: ${state.theme.text};
            font-weight: 500;
        }

        input {
            height: 30px;
            width: 300px;
            padding: 5px;
            border-radius: 4px;
            border: ${`1px solid ${
                state.theme.name === "dark" ? state.theme.info : state.theme.danger
            }`};
            position: absolute;
            top: 25%;

            &:focus,
            &:active {
                outline: none;
            }
        }

        button {
            width: 100px;
            height: 40px;
            padding: 10px;
            cursor: pointer;
            background: ${state.theme.name === "dark" ? state.theme.info : state.theme.danger};
            border-radius: 4px;
            border: none;
            color: white;
            position: absolute;
            bottom: 20px;
            right: 10px;
        }
    `;

    return {
        Form,
    };
};
