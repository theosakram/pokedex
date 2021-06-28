import { gql } from "@apollo/client";

export const PokemonQuery = {
    getPokemons: gql`
        query pokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
                results {
                    id
                    name
                    artwork
                }
            }
        }
    `,
    getPokemon: gql`
        query pokemon($name: String!) {
            pokemon(name: $name) {
                id
                name
                types {
                    type {
                        name
                    }
                }
                abilities {
                    ability {
                        name
                    }
                }
                moves {
                    move {
                        name
                    }
                }
                types {
                    type {
                        name
                    }
                }
                message
                status
            }
        }
    `,
};
