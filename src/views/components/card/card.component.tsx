import { FC, useState, forwardRef } from "react";
import { useCardStyle } from "./card-style";
import { useHistory } from "react-router-dom";

interface CardProps {
    name: string;
    artwork: string;
    nickname?: string;
    onButtonClick?: any;
}

export const Card: FC<CardProps> = ({ name, artwork, nickname, onButtonClick }) => {
    const { push } = useHistory();
    const { Div, Text, Image, Button } = useCardStyle();
    const [hovered, setHovered] = useState(false);

    return (
        <Div
            className="card"
            onClick={() => (nickname ? false : push({ pathname: `/${name}`, state: artwork }))}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {nickname && (
                <Button onClick={(e) => onButtonClick(e, nickname)}>
                    {hovered ? "Release" : "x"}
                </Button>
            )}
            <Image src={artwork} alt="artwork" />
            <Text>{nickname}</Text>
            <Text>{nickname ? `( ${name} )` : name}</Text>
        </Div>
    );
};
