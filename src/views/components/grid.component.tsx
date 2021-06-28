import { FC } from "react";
import styled from "@emotion/styled";
import { useResponsive } from "../../bloc/contexts";

export const Grid: FC = ({ children }) => {
    const { isTablet, isMobile, isSmallLaptop, isMobileL, isMobileM } = useResponsive();
    const col = isTablet
        ? "repeat(5, 1fr)"
        : isMobile || isMobileL || isMobileM
        ? "repeat(2, 1fr)"
        : isSmallLaptop
        ? "repeat(6, 1fr)"
        : "repeat(7, 1fr)";

    const G = styled.div`
        display: grid;
        grid-template-columns: ${col};
        column-gap: 15px;
        row-gap: 15px;
        padding: 10px;
        margin-top: 30px;
    `;

    return <G>{children}</G>;
};
