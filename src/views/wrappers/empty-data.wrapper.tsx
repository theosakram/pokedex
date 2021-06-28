import { FC, ReactElement } from "react";

interface EmptyDataWrapperProps {
    fallbackText: string;
    watchedValue: any;
    children: ReactElement;
}

export const EmptyDataWrapper: FC<EmptyDataWrapperProps> = ({
    children,
    fallbackText,
    watchedValue,
}) => {
    if (Array.isArray(watchedValue) && !watchedValue.length) {
        return (
            <main
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(0, 300%)",
                }}>
                <h1 style={{ color: "white" }}>{fallbackText}</h1>;
            </main>
        );
    }

    if (!Object.keys(watchedValue).length) {
        return (
            <main
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(0, 300%)",
                }}>
                <h1 style={{ color: "white" }}>{fallbackText}</h1>;
            </main>
        );
    }

    return children;
};
