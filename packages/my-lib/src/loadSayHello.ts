import { loadRemote } from "@module-federation/runtime";

export async function loadSayHello() {
    // @ts-ignore
    const { sayHello } = await loadRemote("remote2/sayHello.js")
        .then(mod => {
            console.log("Loaded remote 2", mod);

            return mod;
        })
        .catch(() => console.log("Failed to load remote 2"));

    return {
        sayHello
    };
}