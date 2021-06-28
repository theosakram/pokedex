import { FC } from "react";
import { ReactElement } from "react";
import { Loader } from "../components";
import { ApolloError } from "@apollo/client";

interface LoadErrorWrapperProps {
    loading: boolean;
    err: ApolloError | undefined;
    children: ReactElement;
}

export const LoadErrorWrapper: FC<LoadErrorWrapperProps> = ({ loading, err, children }) => {
    if (loading) {
        return (
            <main
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(0, 300%)",
                }}>
                <Loader />
            </main>
        );
    }

    if (err) {
        return <h1>{err.message}</h1>;
    }

    return children;
};
