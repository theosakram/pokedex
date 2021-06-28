import { MyPokemonActions } from "../actions";

const myPokemonsStorage = (): Pokemon[] => {
    const pokemons = localStorage.getItem("pokemons");

    if (pokemons) return JSON.parse(pokemons);

    return [];
};

export const MyPokemonInitialState: MyPokemonState = {
    pokemons: myPokemonsStorage(),
    loading: false,
    err: null,
    catch_status: false,
};

export const MyPokemonReducer = (state: MyPokemonState, action: Action): MyPokemonState => {
    const { type, value } = action;
    const { ADD_FAVORITE, SET_LOADING, SET_ERROR, CATCH_STATUS, REMOVE_FAVORITE } =
        MyPokemonActions;

    switch (type) {
        case ADD_FAVORITE:
            localStorage.setItem("pokemons", JSON.stringify(state.pokemons.concat(value)));

            return {
                ...state,
                pokemons: state.pokemons.concat(value),
            };

        case CATCH_STATUS:
            return {
                ...state,
                catch_status: value,
            };

        case REMOVE_FAVORITE:
            const newState = state.pokemons.filter(
                (pokemon) => pokemon.nickname?.toLowerCase() !== value.toLowerCase()
            );

            localStorage.setItem("pokemons", JSON.stringify(newState));

            return {
                ...state,
                pokemons: newState,
            };

        case SET_LOADING:
            return {
                ...state,
                loading: value,
            };

        case SET_ERROR:
            return {
                ...state,
                err: value,
            };

        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};
