"use client";

import {
  createClient,
  fetchExchange,
  ssrExchange,
  UrqlProvider,
  cacheExchange,
} from "@urql/next";
import { ReactNode, useMemo } from "react";

type UrqlClientProviderProps = {
  children: ReactNode;
};

export const UrqlClientProvider = (props: UrqlClientProviderProps) => {
  const { children } = props;

  const [client, ssr] = useMemo(() => {
    const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL!;
    const ssr = ssrExchange({
      isClient: typeof window !== "undefined",
    });
    const client = createClient({
      url: graphqlUrl,
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
};
