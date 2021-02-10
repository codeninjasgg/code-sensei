import { walk } from "https://deno.land/std/fs/mod.ts";

interface Config {
  template: string;
}

export default async function (config: Config): Promise<void> {
  let templatePath = "";
  for await (const entry of walk("./templates/")) {
    if (entry.path.replace(/\\+/g, "/").includes(config.template)) {
      templatePath = entry.path;
      break;
    }
  }
  console.log({ templatePath });
}
