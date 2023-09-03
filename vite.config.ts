import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
// import { readFileSync } from "fs"

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    plugins: [
        sveltekit(),
    ],
    server: {
        port: 80,
        fs: {
            allow: ["static"],
        },
        // https: {
        //     cert: readFileSync("./cert/cert.pem"),
        //     key: readFileSync("./cert/key.pem"),
        // },
    },
})
