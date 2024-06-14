import { UrqlClientProvider } from "@/urql-client/urql-client-provider";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return <UrqlClientProvider>{children}</UrqlClientProvider>;
};
