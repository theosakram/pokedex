import { FC, Dispatch, SetStateAction, SyntheticEvent } from "react";
import { useMyPokemon, useNotify } from "../../../bloc/contexts";
import { useFormStyle } from "./pokemon-detail-form-style";

interface PokemonDetailFormContainer {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    name: string;
    artwork: string;
}

export const PokemonDetailForm: FC<PokemonDetailFormContainer> = ({ name, artwork }) => {
    const { addToCollections } = useMyPokemon();
    const { Form } = useFormStyle();
    const { notify } = useNotify();

    const addPokeToCollection = async (e: SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            nickname: {
                value: string;
            };
        };

        if (!target.nickname.value) {
            notify("You need to name your pokemon", "warning");
        } else {
            await addToCollections({ name, artwork, nickname: target.nickname.value }, notify);
        }
    };

    return (
        <Form id="form-pokemon" onSubmit={addPokeToCollection}>
            <label id="label-nickname" htmlFor="nickname">
                Name your newly catched pokemon!
            </label>
            <input id="input-nickname" placeholder="Insert Nickname" type="text" name="nickname" />
            <button type="submit">Finish</button>
        </Form>
    );
};
