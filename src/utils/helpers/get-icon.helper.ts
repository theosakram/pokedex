import BugIcon from "../../lib/images/Icon_Bug.png";
import DarkIcon from "../../lib/images/Icon_Dark.png";
import DragonIcon from "../../lib/images/Icon_Dark.png";
import ElectricIcon from "../../lib/images/Icon_Electric.png";
import FairyIcon from "../../lib/images/Icon_Fairy.png";
import FightingIcon from "../../lib/images/Icon_Fighting.png";
import FireICon from "../../lib/images/Icon_Fire.png";
import FlyingIcon from "../../lib/images/Icon_Flying.png";
import GhostIcon from "../../lib/images/Icon_Ghost.png";
import GrassIcon from "../../lib/images/Icon_Grass.png";
import GroundIcon from "../../lib/images/Icon_Ground.png";
import IceIcon from "../../lib/images/Icon_Ice.png";
import NormalIcon from "../../lib/images/Icon_Normal.png";
import PoisonIcon from "../../lib/images/Icon_Poison.png";
import PsychicIcon from "../../lib/images/Icon_Psychic.png";
import RockIcon from "../../lib/images/Icon_Rock.png";
import SteelIcon from "../../lib/images/Icon_Steel.png";
import WaterIcon from "../../lib/images/Icon_Water.png";

export const getIcon = (name: string) => {
    switch (name) {
        case "bug":
            return BugIcon;

        case "dark":
            return DarkIcon;

        case "dragon":
            return DragonIcon;

        case "electric":
            return ElectricIcon;

        case "fairy":
            return FairyIcon;

        case "fighting":
            return FightingIcon;

        case "fire":
            return FireICon;

        case "flying":
            return FlyingIcon;

        case "ghost":
            return GhostIcon;

        case "grass":
            return GrassIcon;

        case "ground":
            return GroundIcon;

        case "ice":
            return IceIcon;

        case "normal":
            return NormalIcon;

        case "poison":
            return PoisonIcon;

        case "psychic":
            return PsychicIcon;

        case "rock":
            return RockIcon;

        case "steel":
            return SteelIcon;

        case "water":
            return WaterIcon;

        default:
            return GrassIcon;
    }
};
