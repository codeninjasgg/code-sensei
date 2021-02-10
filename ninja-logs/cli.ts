import { Command } from "https://deno.land/x/cliffy@v0.17.2/command/mod.ts";
import ninjaLogs from "./mod.ts";

const main = async () => {
  const { options } = await new Command()
    .name("nl")
    .version("0.0.1")
    .description("command line interface for deno")
    .option("-t, --template", "path of desired template", { required: true })
    .parse(Deno.args);
  await ninjaLogs({ template: options.template });
};

if (import.meta.main) {
  await main();
}

export default main;
