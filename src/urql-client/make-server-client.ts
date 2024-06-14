import { createClient, fetchExchange, cacheExchange } from "@urql/core";

export const makeServerClient = () => {
  const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

  return createClient({
    url: graphqlUrl,
    exchanges: [cacheExchange, fetchExchange],
  });
};
