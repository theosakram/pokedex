import { MyPokemonActions } from "../store/actions";
import { createContext, FC, useReducer, useContext } from "react";
import { MyPokemonInitialState, MyPokemonReducer } from "../store/reducers";

const MyPokemonContext = createContext<MyPokemonContextInterface | undefined>(undefined);

export const MyPokemonProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(MyPokemonReducer, MyPokemonInitialState);
    const { SET_LOADING, ADD_FAVORITE, CATCH_STATUS, REMOVE_FAVORITE } = MyPokemonActions;

    const addToCollections = async (poke: Pokemon, next: Function) => {
        try {
            dispatch({ type: SET_LOADING, value: true });
            const isNameExist = state.pokemons.find(
                (pokemon) => pokemon.nickname?.toLowerCase() === poke.nickname?.toLowerCase()
            );

            if (!!isNameExist) {
                throw new Error(
                    "You already have a pokemon with that name. Give him another name."
                );
            }

            dispatch({ type: ADD_FAVORITE, value: poke });
            dispatch({ type: CATCH_STATUS, value: true });
        } catch (error) {
            next(error.message, "warning");
        } finally {
            dispatch({ type: SET_LOADING, value: false });
        }
    };

    const afterCatchingPokemons = () => dispatch({ type: CATCH_STATUS, value: false });

    const removeFavorite = (nickname: string) => {
        dispatch({ type: REMOVE_FAVORITE, value: nickname });
    };

    return (
        <MyPokemonContext.Provider
            value={{ state, addToCollections, afterCatchingPokemons, removeFavorite }}>
            {children}
        </MyPokemonContext.Provider>
    );
};

export const useMyPokemon = () => {
    const context = useContext(MyPokemonContext);

    if (context === undefined) {
        throw new Error("useMyPokemon must be used within a MyPokemonProvider");
    }

    return context;
};
