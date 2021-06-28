import { createContext, FC, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const ResponsiveContext = createContext<ResponsiveContextInterface | undefined>(undefined);

export const ResponsiveProvider: FC = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 320 });
    const isMobileM = useMediaQuery({ maxWidth: 375 });
    const isMobileL = useMediaQuery({ maxWidth: 425 });
    const isSmallLaptop = useMediaQuery({ maxWidth: 1024 });
    const isWideScreen = useMediaQuery({ minWidth: 1440 });

    return (
        <ResponsiveContext.Provider
            value={{ isMobile, isTablet, isSmallLaptop, isMobileM, isMobileL, isWideScreen }}>
            {children}
        </ResponsiveContext.Provider>
    );
};

export const useResponsive = () => {
    const context = useContext(ResponsiveContext);

    if (context === undefined) {
        throw new Error("useResponsive must be used within a ResponsiveProvider");
    }

    return context;
};
