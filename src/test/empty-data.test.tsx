import { cleanup, render, waitFor } from "@testing-library/react";
import { MyPokemonProvider, ThemeProvider } from "../bloc/contexts";
import { MyPokemonPage } from "../views/pages";
import { ApolloProvider } from "@apollo/client";
import { gqlClient } from "../config/gqlclient";

afterEach(cleanup);

describe("my-pokemon page", () => {
    it("shows text about empty collections when users pokemon collections is empty", async () => {
        const { getByText } = render(
            <ApolloProvider client={gqlClient}>
                <MyPokemonProvider>
                    <ThemeProvider>
                        <MyPokemonPage />
                    </ThemeProvider>
                </MyPokemonProvider>
            </ApolloProvider>
        );

        await waitFor(() =>
            expect(getByText("You haven't catch any pokemons")).toBeInTheDocument()
        );
    });
});
