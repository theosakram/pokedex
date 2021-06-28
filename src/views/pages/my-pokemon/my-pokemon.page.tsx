import { FC, SyntheticEvent, useState } from "react";
import { Card, Grid, Modal } from "../../components";
import { EmptyDataWrapper } from "../../wrappers";
import { useMyPokemon } from "../../../bloc/contexts";
import { useMyPokemonPageStyle } from "./my-pokemon-page-style";

export const MyPokemonPage: FC = () => {
    const { state } = useMyPokemon();
    const [showModal, setShowModal] = useState(false);
    const [nickname, setNickname] = useState("");
    const { Text, Title, BtnCancel, BtnConfirm, ModalDiv } = useMyPokemonPageStyle();
    const { removeFavorite } = useMyPokemon();

    const onButtonClick = () => {
        removeFavorite(nickname);
        setShowModal(false);
    };

    return (
        <EmptyDataWrapper
            watchedValue={state.pokemons}
            fallbackText="You haven't catch any pokemons">
            <>
                {showModal && (
                    <Modal>
                        <ModalDiv>
                            <Title>Request to release:</Title>
                            <Text>{nickname}</Text>
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}>
                                <BtnCancel onClick={() => setShowModal(false)}>
                                    No, I want to keep him
                                </BtnCancel>
                                <BtnConfirm onClick={onButtonClick}>Yes, release him</BtnConfirm>
                            </div>
                        </ModalDiv>
                    </Modal>
                )}
                <Grid>
                    {state.pokemons.map((pokemon, index) => (
                        <Card
                            key={index}
                            name={pokemon.name}
                            artwork={pokemon.artwork}
                            nickname={pokemon.nickname}
                            onButtonClick={(e: SyntheticEvent, nickname: string) => {
                                e.stopPropagation();
                                setNickname(nickname);
                                setShowModal(true);
                            }}
                        />
                    ))}
                </Grid>
            </>
        </EmptyDataWrapper>
    );
};
