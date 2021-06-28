import { useNavbarStyle } from "./navbar-style";
import { useResponsive, useTheme } from "../../../bloc/contexts";
import { Switch } from "../switch/switch.component";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

interface NavbarMenu {
    title: string;
    to: string;
}

const menus: NavbarMenu[] = [
    {
        title: "Pokemons",
        to: "/",
    },
    {
        title: "My Pokemons",
        to: "/my-pokemons",
    },
];

export const Navbar = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();
    const [pathValue, setPathValue] = useState(0);
    const { state, changeTheme } = useTheme();
    const { Box, Text, InsideDiv, OuterDiv, Title, Select } = useNavbarStyle();
    const { isMobileL, isMobileM, isMobile } = useResponsive();

    const toPage = () => {
        if (pathValue > 0) {
            switch (pathValue) {
                case 1:
                    return push("/");

                case 2:
                    return push("/my-pokemons");

                default:
                    return;
            }
        }

        return;
    };

    useEffect(() => {
        toPage();
    }, [pathValue]);

    return (
        <Box>
            <Title>PUKICHO</Title>
            <OuterDiv>
                {isMobile || isMobileM || isMobileL ? (
                    <Select value={pathValue} onChange={(e) => setPathValue(+e.target.value)}>
                        <option value={1}>Pokemons</option>
                        <option value={2}>My Pokemons</option>
                    </Select>
                ) : (
                    menus.map((menu, idx) => (
                        <InsideDiv
                            onClick={() => push(menu.to)}
                            key={idx}
                            style={{
                                borderBottom:
                                    pathname === menu.to
                                        ? `2px solid ${
                                              state.theme.name === "dark"
                                                  ? state.theme.info
                                                  : state.theme.danger
                                          }`
                                        : "none",
                            }}>
                            <Text>{menu.title}</Text>
                        </InsideDiv>
                    ))
                )}
            </OuterDiv>
            <div style={{ position: "absolute", right: 10 }}>
                <Switch checked={state.theme.name === "dark"} onChange={changeTheme} />
            </div>
        </Box>
    );
};
