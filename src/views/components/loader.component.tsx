import { FC, useMemo } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useTheme } from "../../bloc/contexts/theme.context";

export const Loader: FC = () => {
    const { state } = useTheme();

    const spin = useMemo(
        () => keyframes`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        `,
        []
    );

    const Load = useMemo(
        () =>
            styled.div`
                border: 4px solid #f3f3f3;
                border-top: 4px solid
                    ${state.theme.name === "dark" ? state.theme.info : state.theme.danger};
                border-radius: 50%;
                width: 75px;
                height: 75px;
                animation: ${spin} 1s linear infinite;
            `,
        []
    );

    return <Load id="loader" />;
};
