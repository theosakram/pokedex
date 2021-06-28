import { FC, useMemo } from "react";
import styled from "@emotion/styled";
import { useTheme } from "./bloc/contexts";
import { Navbar } from "./views/components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyPokemonPage, PokemonDetailPage, PokemonListPage } from "./views/pages";

const App: FC = () => {
    const { state } = useTheme();

    const Main = useMemo(
        () => styled.div`
            background: ${state.theme.main};
            min-height: 100vh;
        `,
        [state.theme]
    );

    return (
        <Main className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/my-pokemons" component={MyPokemonPage} />
                    <Route path="/:name" component={PokemonDetailPage} />
                    <Route exact path="/" component={PokemonListPage} />
                </Switch>
            </Router>
        </Main>
    );
};

export default App;
