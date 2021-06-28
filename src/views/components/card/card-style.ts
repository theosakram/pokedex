import { useMemo } from "react";
import styled from "@emotion/styled";
import { useTheme } from "../../../bloc/contexts";

export const useCardStyle = () => {
    const { state } = useTheme();

    const Div = useMemo(
        () =>
            styled.div`
                background: ${state.theme.secondAccent};
                height: 200px;
                widht: 450px;
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;
                padding: 15px;
                transition: 0.15s ease-in-out;
                position: relative;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

                &:hover {
                    background: ${state.theme.accent};
                    transform: translate(0px, -10px);

                    button {
                        width: auto;
                        height: auto;
                        border-radius: 4px;
                    }
                }
            `,
        [state.theme.secondAccent]
    );

    const Text = useMemo(
        () =>
            styled.p`
                text-transform: capitalize;
                font-weight: 500;
                color: ${state.theme.text};
                user-select: none;
            `,
        [state.theme.text]
    );

    const Image = useMemo(
        () =>
            styled.img`
                height: 100px;
                width: 100px;
            `,
        []
    );

    const Button = useMemo(
        () =>
            styled.button`
                position: absolute;
                top: 5px;
                right: 5px;
                cursor: pointer;
                padding: 5px;
                width: 20px;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                background: ${state.theme.name === "dark" ? state.theme.info : state.theme.danger};
                color: white;
                border-radius: 50%;
            `,
        [state.theme]
    );

    return {
        Div,
        Text,
        Image,
        Button,
    };
};
