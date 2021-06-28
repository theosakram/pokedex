/// <reference types="react-scripts" />

declare interface Pokemon {
    name: string;
    artwork: string;
    nickname?: string;
}

declare interface MyPokemonState {
    pokemons: Pokemon[];
    catch_status: boolean;
    loading: boolean;
    err: string | null;
}

declare interface Action {
    type: string;
    value: any;
}

declare type Dispatch = (action: Action) => void;

declare interface MyPokemonContextInterface {
    state: MyPokemonState;
    addToCollections: (poke: Pokemon, next: Function) => Promise<void>;
    afterCatchingPokemons: () => void;
    removeFavorite: (nickname: string) => void;
}

declare interface Theme {
    main: string;
    accent: string;
    secondAccent: string;
    thirdAccent: string;
    info: string;
    success: string;
    text: string;
    danger: string;
    name: "dark" | "light";
}

declare interface ThemeState {
    theme: Theme;
}

declare interface ThemeContextInterface {
    state: ThemeState;
    changeTheme: () => void;
}

declare interface ResponsiveContextInterface {
    isTablet: boolean;
    isMobile: boolean;
    isMobileM: boolean;
    isMobileL: boolean;
    isSmallLaptop: boolean;
    isWideScreen: boolean;
}

declare module "react-convert-image";
