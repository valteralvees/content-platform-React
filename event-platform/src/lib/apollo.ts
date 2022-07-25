import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl5xak5u51wmr01ukgbs81tor/master',
    cache: new InMemoryCache()
})