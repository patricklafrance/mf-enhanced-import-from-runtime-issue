import { KnipConfig } from "knip";

const config: KnipConfig = {
    webpack: {
        config: ["webpack.*.js"]
    },
    tsup: {
        config: ["tsup.*.ts"]
    },
    workspaces: {
        "packages/host": {
            ignoreDependencies: [
                "@swc/helpers"
            ]
        },
        "packages/remote-2": {
            entry: [
                "src/index.js",
                "src/sayHello.js"
            ]
        }
    },
    ignoreExportsUsedInFile: true
};

export default config;