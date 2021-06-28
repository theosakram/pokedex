import { FC, ReactElement } from "react";
import { useState } from "react";
import "./tooltip.component.css";

interface TooltipProps {
    content: string;
    direction: "right" | "left" | "top" | "bottom";
    delay: number;
    children: ReactElement;
}

export const Tooltip: FC<TooltipProps> = ({ content, direction, delay, children }) => {
    let timeout: any;

    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 100);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && (
                <div className={`Tooltip-Tip ${direction || "top"}`} style={{ userSelect: "none" }}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
