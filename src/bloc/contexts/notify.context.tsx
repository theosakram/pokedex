import { toast, TypeOptions } from "react-toastify";
import { createContext, FC, ReactText, useContext } from "react";

interface NotifyContextInterface {
    notify: (text: string, type: TypeOptions) => ReactText;
}

const NotifyContext = createContext<NotifyContextInterface | undefined>(undefined);

export const NotifyProvider: FC = ({ children }) => {
    const notify = (text: string, type: TypeOptions) =>
        toast(text, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type,
        });

    return <NotifyContext.Provider value={{ notify }}>{children}</NotifyContext.Provider>;
};

export const useNotify = () => {
    const context = useContext(NotifyContext);

    if (context === undefined) {
        throw new Error("useNotify must be used within a NotifyProvider");
    }

    return context;
};
