import { defineConfig } from "tsup";

export default defineConfig({
    dts: true,
    watch: true,
    entry: ["./src"],
    outDir: "./dist",
    format: "esm",
    target: "esnext",
    platform: "browser",
    sourcemap: "inline",
});
