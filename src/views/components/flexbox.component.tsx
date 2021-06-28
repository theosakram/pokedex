import { CSSProperties } from "react";
import { FC } from "react";

interface FlexBoxProps {
    flexDirection: "column" | "row";
    justifyContent?:
        | "center"
        | "space-around"
        | "space-evenly"
        | "space-between"
        | "flex-end"
        | "flex-start";
    alignItems?: "center" | "flex-end" | "flex-start";
    style?: CSSProperties;
}

export const FlexBox: FC<FlexBoxProps> = ({ children, style, ...props }) => {
    return <div style={{ display: "flex", ...props, ...style }}>{children}</div>;
};
