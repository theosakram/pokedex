import { cleanup, render, waitForElementToBeRemoved } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { PokemonListPage } from "../views/pages";
import { MyPokemonProvider, ThemeProvider } from "../bloc/contexts";
import { PokemonDetailContainer } from "../views/containers/pokemon-details";

afterEach(cleanup);

const mocks: any[] = [];

describe("pokemon-list page", () => {
    it("renders loading at first", () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MyPokemonProvider>
                    <ThemeProvider>
                        <PokemonListPage />
                    </ThemeProvider>
                </MyPokemonProvider>
            </MockedProvider>
        );

        const loader = document.querySelector("#loader");
        expect(loader).toBeInTheDocument();
    });

    it("remove loading component from DOM after finish fetching", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MyPokemonProvider>
                    <ThemeProvider>
                        <PokemonListPage />
                    </ThemeProvider>
                </MyPokemonProvider>
            </MockedProvider>
        );

        const loader = document.querySelector("#loader");

        await waitForElementToBeRemoved(loader).then(() =>
            console.log("Loader components no longer in DOM")
        );
    });
});

describe("pokemon-detail container", () => {
    it("renders loading at first", () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MyPokemonProvider>
                    <ThemeProvider>
                        <PokemonDetailContainer />
                    </ThemeProvider>
                </MyPokemonProvider>
            </MockedProvider>
        );

        const loader = document.querySelector("#loader");
        expect(loader).toBeInTheDocument();
    });

    it("remove loading component from DOM after finish fetching", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MyPokemonProvider>
                    <ThemeProvider>
                        <PokemonDetailContainer />
                    </ThemeProvider>
                </MyPokemonProvider>
            </MockedProvider>
        );

        const loader = document.querySelector("#loader");

        await waitForElementToBeRemoved(loader).then(() =>
            console.log("Loader components no longer in DOM")
        );
    });
});
