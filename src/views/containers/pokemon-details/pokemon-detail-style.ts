import styled from "@emotion/styled";
import { useMemo } from "react";
import { useResponsive, useTheme } from "../../../bloc/contexts";

export const usePokemonDetailStyle = () => {
    const { state } = useTheme();
    const { isTablet, isSmallLaptop, isMobile, isMobileL, isMobileM } = useResponsive();

    const Title = styled.h1`
        color: ${state.theme.name === "dark" ? "white" : state.theme.danger};
        text-transform: capitalize;
        margin-right: 20px;
        user-select: none;
    `;

    const SecondTitle = styled.h1`
        color: ${state.theme.name === "dark" ? "white" : state.theme.danger};
        font-size: 18px;
    `;

    const Text = styled.p`
        color: ${state.theme.text};
    `;

    const IconImage = styled.img`
        width: 35px;
        height: 35px;
        margin-left: 15px;
        user-select: none;
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

    const Image = useMemo(
        () =>
            styled.img`
                height: ${isTablet || isSmallLaptop ? "200px" : "300px"};
                width: ${isTablet || isSmallLaptop ? "200px" : "300px"};
            `,
        [isTablet]
    );

    const DetailBox = useMemo(
        () =>
            styled.div`
                width: ${isMobile || isMobileL || isMobileM
                    ? "100%"
                    : isTablet
                    ? "60%"
                    : isSmallLaptop
                    ? "50%"
                    : "40%"};
                background: ${state.theme.secondAccent};
                border-radius: 4px;
                padding: 10px;
            `,
        [isTablet, isMobile, isMobileL, isMobileM]
    );

    return {
        Title,
        SecondTitle,
        Text,
        IconImage,
        Button,
        Image,
        DetailBox,
    };
};
