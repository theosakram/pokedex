import { ApolloClient, InMemoryCache } from "@apollo/client";

export const gqlClient = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache(),
});
