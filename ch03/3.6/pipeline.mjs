import { pipeline } from "stream/promises";
import zlib from "zlib";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

await pipeline(
    fs.createReadStream(__dirname + "/readme4.txt"),
    zlib.createGzip(),
    fs.createWriteStream(__dirname + "/readme4.txt.gz")
)