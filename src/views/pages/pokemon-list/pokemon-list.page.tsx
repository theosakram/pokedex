import { FC, useCallback, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { Card, Grid } from "../../components";
import { LoadErrorWrapper } from "../../wrappers";
import { PokemonQuery } from "../../../bloc/gql/query";
import { useResponsive } from "../../../bloc/contexts";
import { usePkemonListStyle } from "./pokemon-list.style";

export const PokemonListPage: FC = () => {
    const { isMobile, isSmallLaptop, isTablet } = useResponsive();
    const base = isMobile ? 2 : isTablet ? 5 : isSmallLaptop ? 6 : 7;
    const [limit, setLimit] = useState(() => {
        return base * 4 - 1;
    });
    const { data, loading, error } = useQuery(PokemonQuery.getPokemons, {
        variables: { limit, offset: 0 },
    });
    const { Div, Button } = usePkemonListStyle();

    return (
        <LoadErrorWrapper loading={loading} err={error}>
            <Grid>
                {data?.pokemons.results.map((x: { name: string; artwork: string }, y: number) => (
                    <Card key={y} name={x.name} artwork={x.artwork} />
                ))}
                <Div>
                    <Button onClick={() => setLimit(limit + base * 2)}>Load More</Button>
                </Div>
            </Grid>
        </LoadErrorWrapper>
    );
};
