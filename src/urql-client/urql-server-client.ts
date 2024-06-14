import "server-only";

import { registerUrql } from "@urql/next/rsc";
import { makeServerClient } from "./make-server-client";

export const { getClient: getServerClient } = registerUrql(makeServerClient);
