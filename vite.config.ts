// @ts-ignore // prevent foolish IDE's warning
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
// import { readFileSync } from "fs"

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    plugins: [
        sveltekit(),
    ],
    server: {
        fs: {
            allow: ["static"],
        },
        // https: {
        //     cert: readFileSync("./cert/cert.pem"),
        //     key: readFileSync("./cert/key.pem"),
        // },
    },
    preview: {
        port: 3000,
    },
})
