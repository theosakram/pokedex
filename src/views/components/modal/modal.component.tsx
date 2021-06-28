import { FC } from "react";
import { useTheme } from "../../../bloc/contexts";

export const Modal: FC = ({ children }) => {
    const { state } = useTheme();
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 99,
            }}>
            <div
                style={{
                    width: "400px",
                    height: "175px",
                    background: state.theme.secondAccent,
                    borderRadius: "4px",
                }}>
                {children}
            </div>
        </div>
    );
};
