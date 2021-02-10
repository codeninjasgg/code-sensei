// filename: "nl"
// `nl` is short for "Ninja Logs"

import { Command } from "https://deno.land/x/cliffy@v0.17.2/command/mod.ts";

const main = async () => {
  await new Command()
    .name("nl")
    .version("0.0.1")
    .description("Command line interface for Deno")
    .parse(Deno.args);
};

if (import.meta.main) {
  await main();
}
