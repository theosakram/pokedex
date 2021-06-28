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
        return <h1>{fallbackText}</h1>;
    }

    if (!Object.keys(watchedValue).length) {
        return <h1>{fallbackText}</h1>;
    }

    return children;
};
