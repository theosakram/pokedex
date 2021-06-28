import { useQuery } from "@apollo/client";
import { Tooltip } from "../../components";
import "react-toastify/dist/ReactToastify.css";
import { LoadErrorWrapper } from "../../wrappers";
import { useMyPokemon, useNotify, useResponsive } from "../../../bloc/contexts";
import { PokemonQuery } from "../../../bloc/gql/query";
import { CatchPokemon, getIcon } from "../../../utils/helpers";
import { usePokemonDetailStyle } from "./pokemon-detail-style";
import { FC, useState, useEffect, Dispatch, SetStateAction } from "react";

interface PokemonDetailContainerProps {
    artwork?: string;
    name?: string;
    setShowModal?: Dispatch<SetStateAction<boolean>>;
}

export const PokemonDetailContainer: FC<PokemonDetailContainerProps> = ({
    artwork,
    name,
    setShowModal,
}) => {
    const { data, loading, error } = useQuery(PokemonQuery.getPokemon, { variables: { name } });
    const { state, afterCatchingPokemons } = useMyPokemon();
    const [inAction, setInAction] = useState(false);
    const { notify } = useNotify();

    const catchPoke = async () => {
        try {
            setInAction(true);
            const isPokemonCatched = CatchPokemon();

            if (isPokemonCatched) {
                notify!("Catch succesfull, preparing state", "success");

                return setTimeout(() => {
                    setShowModal!(true);
                }, 3000);
            }

            return notify!("Catch unsuccesful", "warning");
        } catch (error) {
            notify!(error.message, "warning");
        } finally {
            return setTimeout(() => {
                setInAction(false);
            }, 3000);
        }
    };

    useEffect(() => {
        if (state.catch_status) {
            notify!("Adding Pokemon to collections, please wait.", "success");

            setTimeout(() => {
                afterCatchingPokemons();
                setShowModal!(false);
            }, 3000);
        }
    }, [state.catch_status]);

    const moves = data?.pokemon.moves.slice(0, 5);
    const { Title, SecondTitle, Text, IconImage, Button, Image, DetailBox } =
        usePokemonDetailStyle();
    const { isMobile, isMobileL, isMobileM } = useResponsive();

    return (
        <LoadErrorWrapper loading={loading} err={error}>
            <>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: isMobile || isMobileL || isMobileM ? "column" : "row",
                    }}>
                    <div
                        style={{
                            width: isMobile || isMobileL || isMobileM ? "100%" : "40%",
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <Image src={artwork} alt="artwork" />
                    </div>
                    <DetailBox>
                        <div style={{ width: "100%", display: "flex" }}>
                            <Title>{data?.pokemon.name}</Title>
                            {data?.pokemon.types.map((x: any, y: number) => (
                                <Tooltip delay={100} content={x.type.name} direction="top" key={y}>
                                    <IconImage src={getIcon(x.type.name)} alt={x.type.name} />
                                </Tooltip>
                            ))}
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                            <div style={{ marginTop: "15px" }}>
                                <SecondTitle>Abilities</SecondTitle>
                                {data?.pokemon.abilities.map((x: any, y: number) => (
                                    <Text key={y}>{x.ability.name}</Text>
                                ))}
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <SecondTitle>Moves</SecondTitle>
                                {moves?.map((x: any, y: number) => (
                                    <Text key={y}>{x.move.name}</Text>
                                ))}
                            </div>
                        </div>
                    </DetailBox>
                </div>
                <Button disabled={inAction} onClick={() => (inAction ? false : catchPoke())}>
                    Catch Pokemon
                </Button>
            </>
        </LoadErrorWrapper>
    );
};
