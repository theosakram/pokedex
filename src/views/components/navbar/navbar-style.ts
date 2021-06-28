import { useMemo } from "react";
import styled from "@emotion/styled";
import { useResponsive, useTheme } from "../../../bloc/contexts";

export const useNavbarStyle = () => {
    const { state } = useTheme();
    const { isTablet, isSmallLaptop, isMobileL, isMobile, isMobileM } = useResponsive();

    const Title = useMemo(
        () =>
            styled.p`
                color: ${state.theme.text};
                letter-spacing: 1px;
                font-size: 20px;
                font-weight: 500;
                margin-right: ${isMobile ? "15px" : isMobileM ? "10px" : "35px"};
                user-select: none;
            `,
        [state.theme, isMobile, isMobileL]
    );

    const InsideDiv = useMemo(
        () =>
            styled.div`
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            `,
        []
    );

    const OuterDiv = useMemo(
        () =>
            styled.div`
                width: ${isTablet ? "60%" : isSmallLaptop ? "50%" : "35%"};
                display: grid;
                grid-template-columns: ${isMobileL ? "75% 25%" : "25% 25% 50%;"}
                height: inherit;
            `,
        [isTablet, isSmallLaptop, isMobileL, isMobile]
    );

    const Text = useMemo(
        () =>
            styled.p`
                color: ${state.theme.text};
                letter-spacing: 1px;
                font-size: 14px;
                user-select: none;
            `,
        [state.theme]
    );

    const Box = useMemo(
        () =>
            styled.div`
                width: 100%;
                height: 50px;
                display: flex;
                background: ${state.theme.main};
                align-items: center;
                border-bottom: 1px solid ${state.theme.thirdAccent};
                padding: 10px;
                position: relative;
            `,
        [state.theme]
    );

    const Select = styled.select`
        width: ${isMobile ? "125px" : "auto"};
        border-radius: 4px;
        align-self: center;
        border-color: ${state.theme.name === "dark" ? state.theme.info : state.theme.danger};
    `;

    return {
        OuterDiv,
        InsideDiv,
        Text,
        Box,
        Title,
        Select,
    };
};
