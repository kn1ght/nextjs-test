import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

const config: CodegenConfig = {
  schema: graphqlUrl,
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
