import { FC } from "react";
import "./switch.component.css";

interface SwithProps {
    onChange: () => void;
    checked: boolean;
}

export const Switch: FC<SwithProps> = ({ onChange, checked }) => {
    return (
        <label className="switch">
            <input onChange={onChange} type="checkbox" checked={checked} />
            <span className="slider round"></span>
        </label>
    );
};
